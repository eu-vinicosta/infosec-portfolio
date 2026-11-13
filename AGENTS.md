# AGENTS.md - Project Working Rules

These instructions apply to the entire InfoSec portfolio repository.

## Mission
Help maintain a credible, reproducible portfolio for entry-level SOC, Blue Team, and information-security roles. Explain technical decisions in clear Portuguese (pt-BR) and distinguish observed evidence from inference.

## Safety rules
- Treat original phishing samples, suspicious URLs, IPs, attachments, and logs as untrusted.
- Never open, visit, resolve, curl, wget, scan, or otherwise contact an IOC or suspicious destination unless the user explicitly requests a controlled test and the test environment is authorized and isolated.
- Never execute attachments, macros, scripts, or binaries extracted from suspicious messages.
- Prefer offline/static analysis of EML headers, MIME parts, HTML, and defanged indicators.
- Never publish original EML files, recipient addresses, personal data, mailbox identifiers, Message-IDs, tokens, credentials, API keys, or internal network details.
- Keep raw evidence in private storage. Publish only sanitized reports and evidence approved for public release.
- Do not describe an IP, hostname, or file as malicious based only on an unverified reputation assumption. State the evidence source and analysis limitation.
- Perform offensive/security testing only against the user's own isolated lab or explicitly authorized targets.

## Development workflow
- Inspect the repository and existing files before changing them.
- Make focused, minimal changes; avoid unrelated refactors.
- Prefer Python standard library for EML parsing where practical.
- Do not introduce dependencies without explaining why. Pin versions when a dependency is necessary.
- Add comments and usage instructions to scripts.
- Run relevant tests or safe validation commands after changes; report what was and was not tested.
- Never run destructive commands, delete user data, or change remote Git history without explicit approval.
- Do not commit secrets, raw logs with personal data, virtual-machine disks, or large generated artifacts.

## Reporting standards
- Use a clear structure: objective, scope, evidence, findings, IOCs, conclusion, recommendations, limitations, and references.
- Defang public IOCs (for example, `hxxps://example[.]com`).
- Record sample hashes when useful for integrity.
- Mark simulated activity as simulation; do not present it as a real incident.
- Sanitize screenshots and PDFs before public release.
