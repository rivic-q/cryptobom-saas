# Changelog

All notable changes to CryptoBOM SaaS will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial public release of CryptoBOM SaaS
- Open source CBOM scanner for cryptographic asset discovery
- Support for NIST PQC algorithms (ML-KEM, ML-DSA, SLH-DSA)
- eIDAS 2.0 and DORA compliance features
- CycloneDX CBOM output format
- Enterprise SaaS waitlist (February 2026 launch)

### Changed
- Repository made public under MIT License
- Updated documentation for open source community
- Enhanced security guidelines and code of conduct

### Security
- Implemented quantum-safe cryptographic algorithms
- Added security scanning and vulnerability detection
- Established responsible disclosure process

## [1.0.0] - 2025-12-26

### Added
- 🔍 **CBOM Scanner** - Complete cryptographic asset discovery
- 📊 **Web Dashboard** - Interactive visualization of crypto assets
- 🔗 **Open Source Core** - MIT licensed codebase
- 🇪🇺 **EU Compliance** - eIDAS 2.0, DORA, CRA support
- 🏛️ **Regulatory Standards** - BSI TR-02102, NIST FIPS 203/204/205
- 🚀 **GitHub Pages Deployment** - Live demo at rivic-q.github.io
- 📚 **Comprehensive Documentation** - Guides, tutorials, API docs
- 🤝 **Community Guidelines** - Code of conduct and contribution guides
- 🔒 **Security Features** - Vulnerability scanning and threat analysis
- 📱 **Responsive Design** - Mobile-friendly interface

### Technical Features
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Testing**: Comprehensive test suite
- **Deployment**: GitHub Actions CI/CD

### Cryptographic Support
- **Post-Quantum**: ML-KEM, ML-DSA, SLH-DSA detection
- **Classical**: RSA, ECDSA, AES vulnerability analysis  
- **Hybrid**: Support for transitional cryptographic implementations
- **Standards**: NIST, BSI, ETSI compliance checking

### Compliance Features
- **eIDAS 2.0**: Quantum-safe timeline compliance
- **DORA**: Digital operational resilience requirements
- **CRA**: Cyber Resilience Act essential requirements
- **BSI TR-02102**: German cryptographic standards
- **GDPR**: Privacy by design implementation

## Future Releases

### [1.1.0] - Q1 2026 (Planned)
- Enhanced scanning algorithms
- Additional file format support
- Improved performance and scalability
- Community-contributed integrations

### [2.0.0] - February 2026 (Enterprise SaaS Launch)
- Enterprise SaaS platform launch
- Advanced analytics and reporting
- Multi-tenant architecture
- Enterprise integrations and APIs
- Professional support tiers

---

## Contributing to the Changelog

When contributing to CryptoBOM SaaS, please update this changelog with your changes:

### Categories
- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability fixes and security improvements

### Format
```markdown
### Added
- 🎯 New feature description [#PR-number](link) by @contributor

### Security
- 🔒 Security improvement description [#PR-number](link) by @contributor
```

### Guidelines
- Use emoji prefixes for better readability
- Link to relevant PRs and issues
- Credit contributors with @mentions
- Categorize changes appropriately
- Follow semantic versioning principles
- Highlight breaking changes clearly

---

**For detailed information about each release, visit the [GitHub Releases](https://github.com/rivic-q/cryptobom-saas/releases) page.**
