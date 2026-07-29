# Security Policy

## Supported Versions

Only the latest release deployed on [balerejo.com](https://balerejo.com) and [umkm.balerejo.com](https://umkm.balerejo.com) is actively maintained.

## Reporting a Vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

Report vulnerabilities privately via one of the following:

- **GitHub:** [Report a vulnerability](https://github.com/SyafaHadyan/balerejo-web/security/advisories/new)
- **Email:** [desabalerejo1@gmail.com](mailto:desabalerejo1@gmail.com)

Include as much detail as possible:

- A clear description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (optional)

We will acknowledge your report within **7 days** and aim to resolve confirmed vulnerabilities within **30 days**.

## Scope

This is a static informational website with no user accounts, authentication, or backend services. The primary concerns are:

- Cross-site scripting (XSS) in rendered content
- Dependency vulnerabilities in npm packages
- Sensitive data exposure in the repository or build artifacts

Third-party services (Cloudflare, MapLibre, Google Maps) are outside the scope of this policy.
