# Multi-stage build for Rivic CBOM Production
FROM node:18-alpine AS frontend-builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Go backend stage
FROM golang:1.21-alpine AS backend-builder

WORKDIR /app
COPY release/rivic-core/go.mod go.mod
COPY release/rivic-core/go.sum go.sum
RUN go mod download

COPY release/rivic-core/ .
RUN go build -o rivic-core

# Final production stage
FROM alpine:latest

# Install ca-certificates for HTTPS
RUN apk --no-cache add ca-certificates tzdata

WORKDIR /root/

# Copy frontend build
COPY --from=frontend-builder /app/dist ./frontend

# Copy backend binary
COPY --from=backend-builder /app/rivic-core ./rivic-core

# Copy CBOM schemas and examples
COPY CBOM/ ./schemas/
COPY examples/ ./examples/ 2>/dev/null || true

# Copy documentation
COPY README.md ./
COPY DEPLOYMENT_PLAN.md ./

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/health || exit 1

EXPOSE 8080

# Start both services
CMD ["./rivic-core"]
