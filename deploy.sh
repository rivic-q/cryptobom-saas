#!/bin/bash

# Rivic CBOM Production Deployment Script
set -e

echo "🚀 Starting Rivic CBOM Production Deployment..."

# Environment validation
if [ -z "$GEMINI_API_KEY" ]; then
    echo "⚠️  Warning: GEMINI_API_KEY not set. AI features may be limited."
fi

# Build and deploy
echo "📦 Building Docker image..."
docker build -t rivic-cbom:latest .

# Start services
echo "🚀 Starting services with Docker Compose..."
docker-compose --profile production up -d

# Wait for services to be healthy
echo "⏳ Waiting for services to be healthy..."
sleep 30

# Health check
echo "🔍 Performing health check..."
if curl -f http://localhost:8080/health; then
    echo "✅ Rivic CBOM is running successfully!"
    echo "🌐 Frontend: http://localhost:3000"
    echo "🔧 API: http://localhost:8080"
    echo "📊 CBOM Viewer: http://localhost:8080/cbom"
else
    echo "❌ Health check failed. Check logs with: docker-compose logs"
    exit 1
fi

# Display status
echo ""
echo "📋 Deployment Summary:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🏢 Platform: Rivic CBOM SaaS Portal"
echo "🔧 Backend: Go Rivic Core"
echo "🎨 Frontend: React 19.2.3 + Vite"
echo "🤖 AI Service: Google Gemini Integration"
echo "📊 CBOM Engine: CycloneDX Compatible"
echo "🔒 Security: DORA Compliant, Quantum-Safe Ready"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎉 Deployment completed successfully!"
echo "📖 Documentation: ./DEPLOYMENT_PLAN.md"
echo "🛠️  Configuration: ./docker-compose.yml"
