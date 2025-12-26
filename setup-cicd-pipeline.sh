#!/bin/bash

# 🚀 Rivic CI/CD Pipeline Setup Script
# Streamlined process to connect public and private repositories

set -e

echo "🔄 Setting up Rivic CI/CD Pipeline..."

# Configuration
PUBLIC_REPO="rivic-q/cryptobom-saas"
PRIVATE_REPO="rivic-q/rivic-enterprise"
CONTACT_EMAIL="rivic.revanande@gmail.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_step() {
    echo -e "${BLUE}📋 Step $1:${NC} $2"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Step 1: Validate current setup
print_step "1" "Validating current repository setup..."

if [ ! -d ".git" ]; then
    print_error "Not a git repository. Please run this from the root of your repository."
    exit 1
fi

# Check if we're in the correct repository
CURRENT_REPO=$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/')
if [[ "$CURRENT_REPO" != "$PUBLIC_REPO" ]]; then
    print_warning "Current repository: $CURRENT_REPO"
    print_warning "Expected: $PUBLIC_REPO"
fi

print_success "Repository validation complete"

# Step 2: Check for required files
print_step "2" "Checking required CI/CD files..."

REQUIRED_FILES=(
    ".github/workflows/deploy.yml"
    ".github/workflows/sync-to-private.yml"
    "README.md"
    "package.json"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        print_success "Found: $file"
    else
        print_error "Missing: $file"
        exit 1
    fi
done

# Step 3: Setup GitHub secrets (instructions)
print_step "3" "GitHub Secrets Setup Instructions..."

cat << EOF

📋 Required GitHub Secrets:
══════════════════════════

To complete the CI/CD setup, add these secrets to your repository:

1. Go to: https://github.com/$PUBLIC_REPO/settings/secrets/actions

2. Add the following secrets:

   🔑 PRIVATE_REPO_TOKEN
   ├─ Description: Personal Access Token for private repository access  
   ├─ Value: [Create at https://github.com/settings/tokens]
   └─ Permissions: repo (Full control of private repositories)

   📧 NOTIFICATION_EMAIL  
   ├─ Description: Email for CI/CD notifications
   ├─ Value: $CONTACT_EMAIL
   └─ Usage: Sync completion notifications

3. Repository Environments:
   
   🔒 private-repo-sync
   ├─ Protection rules: Require approval for production
   ├─ Environment secrets: PRIVATE_REPO_TOKEN
   └─ Reviewers: Repository maintainers

EOF

# Step 4: Create private repository structure
print_step "4" "Private repository setup instructions..."

cat << EOF

🏢 Private Repository Setup:
════════════════════════════

1. Create private repository:
   └─ Name: rivic-enterprise
   └─ Visibility: Private  
   └─ Initialize: With README

2. Repository structure:
   rivic-enterprise/
   ├── public-docs/          # Synced from public repo
   ├── api-specs/            # Public API specifications  
   ├── open-source-components/ # Public components reference
   ├── enterprise-core/      # Private enterprise features
   ├── monitoring/           # Advanced monitoring (private)
   ├── quantum-integration/  # IBM Quantum features (private)
   └── deployment/           # Infrastructure as code (private)

3. Team access:
   ├─ Admin: $CONTACT_EMAIL
   ├─ Write: Core development team
   └─ Read: QA and testing team

EOF

# Step 5: Workflow validation  
print_step "5" "Validating CI/CD workflows..."

# Check workflow syntax
for workflow in .github/workflows/*.yml; do
    if command -v yamllint >/dev/null 2>&1; then
        if yamllint "$workflow" >/dev/null 2>&1; then
            print_success "Valid YAML: $(basename "$workflow")"
        else
            print_error "Invalid YAML: $(basename "$workflow")"
        fi
    else
        print_warning "yamllint not installed - skipping YAML validation"
    fi
done

# Step 6: Generate sync configuration
print_step "6" "Generating sync configuration..."

cat > .rivic-sync.json << EOF
{
  "version": "1.0.0",
  "public_repository": "$PUBLIC_REPO",
  "private_repository": "$PRIVATE_REPO",
  "sync_rules": {
    "documentation": {
      "source": [
        "README.md",
        "CONTRIBUTING.md", 
        "SECURITY.md",
        "CHANGELOG.md",
        "docs/"
      ],
      "destination": "public-docs/",
      "auto_sync": true
    },
    "api_specifications": {
      "source": [
        "app/api/v1/cbom/",
        "components/open-source-*.tsx"
      ],
      "destination": "api-specs/",
      "auto_sync": true
    },
    "exclude_patterns": [
      "**/rivic-core-*",
      "**/enterprise-*",
      "**/private-*",
      "app/dashboard/",
      "app/api/v1/monitoring/",
      "app/api/v1/quantum/"
    ]
  },
  "notifications": {
    "email": "$CONTACT_EMAIL",
    "on_success": true,
    "on_failure": true
  },
  "security": {
    "scan_before_sync": true,
    "exclude_secrets": true,
    "require_review": false
  }
}
EOF

print_success "Sync configuration created: .rivic-sync.json"

# Step 7: Test workflow (dry run)
print_step "7" "Testing workflow configuration..."

echo "🧪 Dry run test:"
echo "├─ Public repo: $(git config --get remote.origin.url)"
echo "├─ Current branch: $(git branch --show-current)"  
echo "├─ Latest commit: $(git log -1 --format="%h %s")"
echo "└─ Contact: $CONTACT_EMAIL"

# Step 8: Deployment checklist
print_step "8" "Deployment checklist..."

cat << EOF

🚀 Deployment Checklist:
═══════════════════════

Pre-deployment:
□ Create private repository: $PRIVATE_REPO
□ Add GitHub secrets (PRIVATE_REPO_TOKEN)
□ Configure repository environments  
□ Set up team access permissions

Post-deployment:
□ Test sync workflow manually
□ Verify documentation sync
□ Check API specification sync
□ Validate security exclusions
□ Monitor sync logs

Maintenance:
□ Regular security reviews
□ Update sync rules as needed
□ Monitor private repository growth
□ Review access permissions quarterly

EOF

print_success "CI/CD Pipeline setup complete!"

cat << EOF

🎉 Next Steps:
═══════════════

1. 📋 Complete the GitHub secrets setup above
2. 🏢 Create the private repository: $PRIVATE_REPO  
3. 🔄 Test the sync workflow:
   └─ git commit -m "test: trigger sync workflow"
   └─ git push origin main

4. 📧 Monitor notifications at: $CONTACT_EMAIL

Need help? Contact: $CONTACT_EMAIL

EOF
