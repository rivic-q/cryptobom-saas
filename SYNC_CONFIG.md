# 🔄 Public to Private Repository Sync Configuration

## Overview
This configuration enables automated synchronization between the public `cryptobom-saas` repository and the private `rivic-enterprise` repository while maintaining proper security boundaries.

## Sync Process

### 🔓 What Gets Synced (Public → Private)
- ✅ **Documentation**: README, CONTRIBUTING, SECURITY guides
- ✅ **Open Source Components**: Public CBOM scanner components  
- ✅ **API Specifications**: Public API endpoints and schemas
- ✅ **Community Files**: Issue templates, PR templates, workflows

### 🔒 What Stays Private (Enterprise Only)
- ❌ **Rivic Core Engine**: Advanced scanning and AI features
- ❌ **Enterprise Dashboard**: Real-time monitoring and analytics
- ❌ **Quantum Integration**: IBM Quantum Network APIs
- ❌ **Advanced Features**: Auto-remediation, compliance automation
- ❌ **Infrastructure**: Kubernetes operators, deployment configs

## Automation Triggers

### Automatic Sync
- 📝 Documentation updates (README.md, *.md files)
- 🔧 Open source component changes
- 🔌 Public API specification updates
- 📋 Community template updates

### Manual Sync
- 🎛️ Workflow dispatch with sync type selection
- 🔄 Full sync option for major releases
- 📦 Selective sync for specific components

## Security Features

### Pre-Sync Security Scan
1. **Secret Detection**: Scan for API keys, tokens, passwords
2. **Dependency Audit**: Check for vulnerable dependencies  
3. **Code Quality**: Lint checks and type validation
4. **Access Control**: Verify permissions and authentication

### Exclusion Patterns
```
# Enterprise components (never synced)
**/rivic-core-*
**/enterprise-*  
**/private-*
app/dashboard/
app/api/v1/monitoring/
app/api/v1/quantum/
components/rivic-core-*

# Sensitive files
*.env*
*.key
*.pem
**/secrets/
```

## Setup Instructions

### 1. GitHub Secrets Configuration
Add these secrets to the public repository:

- `PRIVATE_REPO_TOKEN`: Personal access token with repo permissions
- `NOTIFICATION_EMAIL`: Email for sync notifications (rivic.revanande@gmail.com)

### 2. Private Repository Structure
```
rivic-enterprise/
├── public-docs/              # Synced documentation
├── api-specs/               # Public API specifications  
├── open-source-components/  # Reference implementations
├── enterprise-core/         # Private advanced features
├── monitoring/             # Enterprise monitoring
├── quantum-integration/    # IBM Quantum features
└── deployment/            # Infrastructure as code
```

### 3. Environment Configuration
Create `private-repo-sync` environment with:
- Protection rules for production deployments
- Required reviewers for sensitive changes
- Environment-specific secrets

## Workflow Files

### Primary Sync Workflow
`.github/workflows/sync-to-private.yml`
- Triggered on documentation changes
- Security scanning before sync
- Automated commit to private repository
- Notification on completion/failure

### Deployment Workflow  
`.github/workflows/deploy.yml`
- GitHub Pages deployment for public demo
- Build and test validation
- Production deployment automation

## Monitoring & Notifications

### Sync Reports
- 📊 Automatic sync reports in private repository
- 📈 Statistics on synced components
- 🔍 Change tracking and audit trail
- ⚠️ Conflict resolution logs

### Notifications
- ✅ Success notifications to team email
- ❌ Failure alerts with troubleshooting info  
- 📧 Weekly sync summary reports
- 🚨 Security scan alerts

## Troubleshooting

### Common Issues
1. **Token Expiration**: Renew PRIVATE_REPO_TOKEN
2. **Permission Errors**: Check repository access rights
3. **Merge Conflicts**: Manual resolution required
4. **Security Scan Failures**: Review and fix security issues

### Support
- 📧 **Technical Issues**: rivic.revanande@gmail.com
- 📚 **Documentation**: Check workflow logs in Actions tab
- 🔍 **Debug**: Enable debug logging in workflow

## Best Practices

### Repository Management
1. **Keep Boundaries Clear**: Maintain strict separation between public and private components
2. **Regular Reviews**: Quarterly review of sync rules and exclusions
3. **Security First**: Always run security scans before syncing
4. **Documentation**: Keep sync configurations documented and updated

### Development Workflow
1. **Public First**: Develop open source components in public repository
2. **Enterprise Extensions**: Build enterprise features in private repository
3. **API Compatibility**: Maintain backward compatibility for public APIs
4. **Testing**: Test both repositories after major sync operations

---

*This configuration ensures secure, automated synchronization while maintaining proper separation between open source and enterprise components.*
