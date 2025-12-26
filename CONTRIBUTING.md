# Contributing to CryptoBOM SaaS - Quantum-Safe CBOM Platform

We're excited to have you contribute to CryptoBOM SaaS! This document outlines how to contribute to our open source cryptographic bill of materials platform.

## 🚀 Quick Start

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/cryptobom-saas.git`
3. Install dependencies: `npm install --legacy-peer-deps`
4. Start development server: `npm run dev`
5. Make your changes
6. Submit a pull request

## 🎯 Areas for Contribution

### � CBOM & Scanning
- Cryptographic asset discovery algorithms
- New file format support (SPDX, CycloneDX extensions)
- Binary analysis improvements
- Container and cloud scanning capabilities

### 🏦 Banking & Finance
- EU compliance features (eIDAS 2.0, DORA)
- Financial services integrations
- Regulatory reporting improvements
- Risk assessment algorithms

### 🌐 SaaS Platform
- Dashboard improvements
- API enhancements
- Multi-tenant architecture
- Cloud deployment optimizations

### 📚 Documentation
- CBOM format documentation
- Integration guides
- Security best practices
- Migration tutorials

## 📋 Development Guidelines

### Code Standards
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features

### Security Requirements
- All cryptographic scanning must follow security best practices
- Follow NIST guidelines for quantum-safe implementations
- No hardcoded secrets or credentials
- Implement proper input validation for all scanned inputs

### Testing
- Write unit tests for new scanning features
- Include integration tests for API changes
- Test security-critical components thoroughly
- Verify CBOM format compliance

## 🔒 Security Disclosure

For security vulnerabilities, please email: security@rivic.io

Do not create public issues for security vulnerabilities.

## 📞 Contact

- **Development**: dev@cryptobom.io
- **Security**: security@cryptobom.io
- **General**: hello@cryptobom.io

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.
