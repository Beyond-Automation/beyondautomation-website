# Custom Domain on Netlify

## Before changing DNS

Confirm:

- The final domain name
- The domain registrar
- Whether the root domain or `www` should be primary

## Netlify

1. Open the Beyond Automation site in Netlify.
2. Go to **Domain management**.
3. Select **Add a domain**.
4. Enter the purchased domain.
5. Add both the apex domain and `www` variant.
6. Choose the preferred primary domain.
7. Follow the DNS records shown by Netlify.
8. Wait for DNS verification and certificate provisioning.

## Environment variable

Set:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Redeploy after changing it.

## Verify

- HTTPS loads without certificate warnings
- Apex and `www` redirect consistently
- `/sitemap.xml` uses the custom domain
- `/robots.txt` points to the custom-domain sitemap
- Open Graph metadata uses the custom domain
