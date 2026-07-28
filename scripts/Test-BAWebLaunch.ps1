#requires -Version 7.4
[CmdletBinding()]
param(
    [string]$ProjectRoot = 'C:\Projects\BeyondAutomation\beyondautomation-website',
    [string]$ExpectedBranch = 'BA-WEB-013'
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Set-Location $ProjectRoot

$gitRoot = [System.IO.Path]::GetFullPath(
    ((& git rev-parse --show-toplevel) -replace '/', '\')
)
$resolvedRoot = [System.IO.Path]::GetFullPath((Resolve-Path $ProjectRoot).Path)
$branch = (& git branch --show-current).Trim()

if ($gitRoot.TrimEnd('\') -ne $resolvedRoot.TrimEnd('\')) {
    throw "Wrong repository root."
}

if ($branch -ne $ExpectedBranch) {
    throw "Wrong branch. Expected '$ExpectedBranch' but found '$branch'."
}

Write-Host ""
Write-Host "=== BA-WEB-013 VALIDATION ===" -ForegroundColor Cyan
Write-Host "Folder : $resolvedRoot"
Write-Host "Branch : $branch"
Write-Host ""

$requiredFiles = @(
    'next.config.ts',
    'netlify.toml',
    'src\app\layout.tsx',
    'src\app\robots.ts',
    'src\app\sitemap.ts',
    'src\app\manifest.ts',
    'src\app\not-found.tsx',
    'src\app\opengraph-image.tsx'
)

foreach ($relative in $requiredFiles) {
    if (-not (Test-Path (Join-Path $ProjectRoot $relative))) {
        throw "Required file missing: $relative"
    }

    Write-Host "[PASS] $relative" -ForegroundColor Green
}

Remove-Item '.\.next' -Recurse -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "[TEST] Production build" -ForegroundColor Cyan
& npm run build
if ($LASTEXITCODE -ne 0) {
    throw "Production build failed."
}

Write-Host ""
Write-Host "[TEST] Production dependency audit (high or critical)" -ForegroundColor Cyan
& npm audit --omit=dev --audit-level=high
if ($LASTEXITCODE -ne 0) {
    throw "npm audit found high or critical production vulnerabilities."
}

Write-Host ""
Write-Host "BA-WEB-013 validation passed." -ForegroundColor Green
