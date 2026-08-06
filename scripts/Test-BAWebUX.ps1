#requires -Version 7.4
[CmdletBinding()]
param(
    [string]$ExpectedBranch = "BA-WEB-017"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$Branch = (git branch --show-current).Trim()

if ($Branch -ne $ExpectedBranch) {
    throw "Wrong branch. Expected $ExpectedBranch."
}

$RequiredRoutes = @(
    ".\src\app\page.tsx",
    ".\src\app\aihat\page.tsx",
    ".\src\app\products\page.tsx",
    ".\src\app\journal\page.tsx",
    ".\src\app\resources\page.tsx",
    ".\src\app\privacy\page.tsx",
    ".\src\app\terms\page.tsx"
)

foreach ($Route in $RequiredRoutes) {
    if (-not (Test-Path $Route)) {
        throw "Required route missing: $Route"
    }
}

$SourceFiles = Get-ChildItem ".\src" -Recurse -File `
    -Include *.tsx,*.ts

$DeadLinks = @(
    $SourceFiles |
        Select-String -Pattern 'href\s*=\s*["'']#["'']'
)

if ($DeadLinks.Count -gt 0) {
    $DeadLinks |
        Select-Object Path, LineNumber, Line |
        Format-Table -AutoSize

    throw "Dead href='#' links remain."
}

$OldDomain = @(
    $SourceFiles |
        Select-String -Pattern 'beyondautomation\.com'
)

if ($OldDomain.Count -gt 0) {
    $OldDomain |
        Select-Object Path, LineNumber, Line |
        Format-Table -AutoSize

    throw "Old .com references remain."
}

$Page = Get-Content ".\src\app\page.tsx" -Raw
$Hero = Get-Content ".\src\components\Hero.tsx" -Raw

if ($Page -notmatch 'id="interactive-demo"') {
    throw "Interactive demo target is missing."
}

if ($Page -notmatch '<AIHATDemo') {
    throw "AIHATDemo is not mounted."
}

if ($Hero -notmatch 'href="#interactive-demo"') {
    throw "Hero demo CTA is wired incorrectly."
}

if ($Hero -match 'id="demo"') {
    throw "Legacy duplicate demo ID remains in Hero."
}

npm run lint
if ($LASTEXITCODE -ne 0) {
    throw "Lint failed."
}

npm run build
if ($LASTEXITCODE -ne 0) {
    throw "Production build failed."
}

Write-Host ""
Write-Host "BA-WEB-017 AUTOMATED UX VALIDATION PASSED" `
    -ForegroundColor Green
