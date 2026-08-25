<div align="center">

# 🚀 K8s DevOps Blueprint

### Full-Stack E-Commerce Application with Kubernetes & GitOps

[![CI Pipeline](https://github.com/Nguyen-Thanh-Huy-io/k8s-devops-blueprint/actions/workflows/ci.yml/badge.svg)](https://github.com/Nguyen-Thanh-Huy-io/k8s-devops-blueprint/actions)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![ArgoCD](https://img.shields.io/badge/Argo%20CD-EF7B4D?style=for-the-badge&logo=argo&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Angular](https://img.shields.io/badge/Angular%2016-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

---

**Dự án minh họa quy trình DevOps hoàn chỉnh** — từ phát triển ứng dụng, đóng gói container,  
CI/CD tự động, đến triển khai trên Kubernetes với mô hình GitOps sử dụng ArgoCD.

[Kiến trúc](#-kiến-trúc-hệ-thống) •
[Cài đặt](#-hướng-dẫn-cài-đặt) •
[CI/CD](#-cicd-pipeline) •
[Cấu trúc dự án](#-cấu-trúc-dự-án) •
[Đóng góp](#-đóng-góp)

</div>

---

## 📋 Mục lục

- [Giới thiệu](#-giới-thiệu)
- [Kiến trúc hệ thống](#-kiến-trúc-hệ-thống)
- [Tech Stack](#-tech-stack)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Hướng dẫn cài đặt](#-hướng-dẫn-cài-đặt)
- [CI/CD Pipeline](#-cicd-pipeline)
- [GitOps với ArgoCD](#-gitops-với-argocd)
- [API Endpoints](#-api-endpoints)
- [Biến môi trường](#-biến-môi-trường)
- [Roadmap](#-roadmap)
- [Đóng góp](#-đóng-góp)
- [Giấy phép](#-giấy-phép)

---

## 📖 Giới thiệu

**K8s DevOps Blueprint** là một dự án thực hành end-to-end, xây dựng ứng dụng **E-Commerce** full-stack và triển khai trên **Kubernetes** theo mô hình **GitOps**. Dự án phục vụ mục đích học tập và trình bày các best practices trong quy trình DevOps hiện đại.

### ✨ Tính năng chính

| Tính năng | Mô tả |
|-----------|-------|
| 🛒 **Quản lý sản phẩm** | Danh mục sản phẩm, tìm kiếm, phân trang |
| 🛍️ **Giỏ hàng** | Thêm/xóa/cập nhật sản phẩm trong giỏ |
| 💳 **Thanh toán (Checkout)** | Quy trình đặt hàng với form xác nhận |
| 📦 **Lịch sử đơn hàng** | Xem lại các đơn hàng đã đặt |
| 🔐 **Xác thực Okta** | Đăng nhập/đăng ký bảo mật qua Okta OAuth 2.0 |
| 🐳 **Containerized** | Multi-stage Docker builds cho cả frontend & backend |
| ⚙️ **CI/CD** | Tự động build & push images qua GitHub Actions |
| 🔄 **GitOps** | Auto-sync deployment qua ArgoCD |

---

## 🏗 Kiến trúc hệ thống

```
┌─────────────────────────────────────────────────────────────────────┐
│                        DEVELOPER WORKFLOW                          │
│                                                                    │
│   [Developer] ──git push──► [GitHub Repository]                    │
│                                    │                               │
│                                    ▼                               │
│                          ┌─────────────────┐                       │
│                          │ GitHub Actions   │                       │
│                          │ CI Pipeline      │                       │
│                          │                  │                       │
│                          │ • Build Backend  │                       │
│                          │ • Build Frontend │                       │
│                          │ • Push to DockerHub│                     │
│                          └────────┬────────┘                       │
│                                   │                                │
│                                   ▼                                │
│                          ┌─────────────────┐                       │
│                          │   Docker Hub     │                       │
│                          │                  │                       │
│                          │ • backend:latest │                       │
│                          │ • frontend:latest│                       │
│                          └────────┬────────┘                       │
└───────────────────────────────────┼─────────────────────────────────┘
                                    │
┌───────────────────────────────────┼─────────────────────────────────┐
│                    KUBERNETES CLUSTER                               │
│                                   │                                │
│   ┌───────────────┐              │                                 │
│   │   ArgoCD      │◄─── watches ─┘                                 │
│   │               │     (GitOps auto-sync)                         │
│   │ • Prune: true │                                                │
│   │ • SelfHeal    │                                                │
│   └───────┬───────┘                                                │
│           │ deploys                                                 │
│           ▼                                                        │
│   ┌───────────────────────────────────────────┐                    │
│   │              Namespace: default           │                    │
│   │                                           │                    │
│   │  ┌─────────────┐    ┌─────────────────┐   │                    │
│   │  │  Frontend    │    │    Backend      │   │                    │
│   │  │  (Angular)   │    │ (Spring Boot)   │   │                    │
│   │  │              │    │                 │   │                    │
│   │  │  Nginx :80   │───►│   Tomcat :8080  │   │                    │
│   │  └─────────────┘    └────────┬────────┘   │                    │
│   │                              │             │                    │
│   │                              ▼             │                    │
│   │                     ┌─────────────────┐   │                    │
│   │                     │     MySQL       │   │                    │
│   │                     │   :3306        │   │                    │
│   │                     └─────────────────┘   │                    │
│   └───────────────────────────────────────────┘                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## 🛠 Tech Stack

### Application

| Layer | Công nghệ | Phiên bản | Mô tả |
|-------|-----------|-----------|-------|
| **Frontend** | Angular | 16.2 | SPA framework với TypeScript |
| **UI Framework** | Bootstrap | 5.2 | Responsive CSS framework |
| **Icons** | FontAwesome | 6.4 | Icon library |
| **Backend** | Spring Boot | 3.1.2 | Java REST API framework |
| **ORM** | Spring Data JPA | — | Object-Relational Mapping |
| **Database** | MySQL | 8.x | Relational Database |
| **Auth** | Okta | OAuth 2.0 | Identity & Access Management |

### DevOps & Infrastructure

| Công cụ | Mục đích |
|---------|----------|
| **Docker** | Containerization (Multi-stage builds) |
| **Kubernetes** | Container orchestration |
| **ArgoCD** | GitOps continuous delivery |
| **GitHub Actions** | CI pipeline (build & push) |
| **Nginx** | Reverse proxy / static file serving |
| **Docker Hub** | Container registry |

---

## 📁 Cấu trúc dự án

```
k8s-devops-blueprint/
│
├── 📂 .github/
│   └── 📂 workflows/
│       └── 📄 ci.yml                  # GitHub Actions CI pipeline
│
├── 📂 ecommerce-app/
│   ├── 📂 backend/                    # Spring Boot REST API
│   │   ├── 📂 src/
│   │   │   └── 📂 main/
│   │   │       ├── 📂 java/com/unejsi/springbootecommerce/
│   │   │       │   ├── 📂 config/     # Security, CORS, Data REST config
│   │   │       │   ├── 📂 controller/ # REST controllers
│   │   │       │   ├── 📂 dao/        # Spring Data repositories
│   │   │       │   ├── 📂 dto/        # Data Transfer Objects
│   │   │       │   ├── 📂 entity/     # JPA entities
│   │   │       │   └── 📂 service/    # Business logic
│   │   │       └── 📂 resources/
│   │   │           └── 📄 application.properties
│   │   ├── 📄 Dockerfile              # Multi-stage: Maven build → JRE runtime
│   │   └── 📄 pom.xml                 # Maven dependencies
│   │
│   └── 📂 frontend/                   # Angular 16 SPA
│       ├── 📂 src/
│       │   ├── 📂 app/
│       │   │   ├── 📂 common/         # Shared models & interfaces
│       │   │   ├── 📂 components/     # UI components
│       │   │   │   ├── cart-details/   # Trang chi tiết giỏ hàng
│       │   │   │   ├── checkout/       # Trang thanh toán
│       │   │   │   ├── login/          # Trang đăng nhập Okta
│       │   │   │   ├── order-history/  # Lịch sử đơn hàng
│       │   │   │   ├── product-list/   # Danh sách sản phẩm
│       │   │   │   ├── product-details/# Chi tiết sản phẩm
│       │   │   │   └── search/         # Tìm kiếm sản phẩm
│       │   │   ├── 📂 config/         # App configuration
│       │   │   └── 📂 services/       # HTTP services & interceptors
│       │   └── 📄 index.html
│       ├── 📄 default.conf            # Nginx config (SPA routing)
│       ├── 📄 Dockerfile              # Multi-stage: Node build → Nginx
│       └── 📄 package.json
│
├── 📂 k8s/
│   └── 📄 argocd-app.yml             # ArgoCD Application manifest
│
└── 📄 README.md
```

---

## 🚀 Hướng dẫn cài đặt

### Yêu cầu hệ thống

| Công cụ | Phiên bản tối thiểu |
|---------|---------------------|
| Docker | 20.10+ |
| Kubernetes (kubectl) | 1.25+ |
| Java JDK | 17 |
| Node.js | 18.x |
| Maven | 3.8+ |
| ArgoCD CLI | 2.x |

### 1️⃣ Clone repository

```bash
git clone https://github.com/Nguyen-Thanh-Huy-io/k8s-devops-blueprint.git
cd k8s-devops-blueprint
```

### 2️⃣ Chạy Backend (Development)

```bash
cd ecommerce-app/backend

# Cấu hình database trong src/main/resources/application.properties
# Sửa spring.datasource.url, username, password cho phù hợp

# Build & Run
./mvnw spring-boot:run
```

> Backend sẽ chạy tại `http://localhost:8080`

### 3️⃣ Chạy Frontend (Development)

```bash
cd ecommerce-app/frontend

npm install --force
npm start
```

> Frontend sẽ chạy tại `http://localhost:4200`

### 4️⃣ Build Docker Images

```bash
# Build Backend image
docker build -t ecommerce-backend:latest ./ecommerce-app/backend

# Build Frontend image
docker build -t ecommerce-frontend:latest ./ecommerce-app/frontend

# Verify
docker images | grep ecommerce
```

### 5️⃣ Triển khai lên Kubernetes với ArgoCD

```bash
# Cài đặt ArgoCD trên cluster
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Đợi ArgoCD sẵn sàng
kubectl wait --for=condition=available deployment/argocd-server -n argocd --timeout=300s

# Lấy password mặc định
ARGO_PWD=$(kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d)
echo "ArgoCD Password: $ARGO_PWD"

# Apply ArgoCD Application manifest
kubectl apply -f k8s/argocd-app.yml
```

> ArgoCD sẽ tự động watch repository và sync deployments khi có thay đổi.

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

Pipeline được trigger khi có `push` hoặc `pull_request` lên branch `main`:

```
┌──────────┐     ┌──────────────┐     ┌───────────────┐     ┌─────────────┐
│  Push /  │────►│   Checkout   │────►│ Setup Docker  │────►│  Login to   │
│   PR     │     │     Code     │     │    Buildx     │     │  DockerHub  │
└──────────┘     └──────────────┘     └───────────────┘     └──────┬──────┘
                                                                    │
                                                                    ▼
                                                          ┌─────────────────┐
                                                          │  Build & Push   │
                                                          │                 │
                                                          │ • Backend Image │
                                                          │ • Frontend Image│
                                                          └─────────────────┘
```

### Secrets cần cấu hình

| Secret | Mô tả |
|--------|-------|
| `DOCKER_USERNAME` | Username Docker Hub |
| `DOCKER_PASSWORD` | Password hoặc Access Token Docker Hub |

---

## 🔄 GitOps với ArgoCD

ArgoCD được cấu hình để **tự động đồng bộ** trạng thái của cluster Kubernetes với repository Git:

```yaml
# k8s/argocd-app.yml
syncPolicy:
  automated:
    prune: true      # Tự động xóa resources không còn trong Git
    selfHeal: true   # Tự động khôi phục nếu có thay đổi thủ công
```

### Workflow GitOps

1. **Developer** push code lên `main`
2. **GitHub Actions** tự động build Docker images → push lên Docker Hub
3. **ArgoCD** detect thay đổi trong thư mục `k8s/` → tự động sync lên cluster
4. Cluster luôn phản ánh đúng trạng thái được khai báo trong Git (**Single Source of Truth**)

---

## 🌐 API Endpoints

Backend expose REST API qua Spring Data REST:

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/products` | Lấy danh sách sản phẩm |
| `GET` | `/api/products/{id}` | Chi tiết sản phẩm |
| `GET` | `/api/product-category` | Danh mục sản phẩm |
| `GET` | `/api/countries` | Danh sách quốc gia |
| `GET` | `/api/states` | Danh sách bang/tỉnh |
| `POST` | `/api/checkout/purchase` | Đặt hàng |
| `GET` | `/api/orders` | Lịch sử đơn hàng (authenticated) |

---

## 🔧 Biến môi trường

### Backend (`application.properties`)

| Biến | Mô tả | Mặc định |
|------|-------|----------|
| `spring.datasource.url` | JDBC URL kết nối MySQL | `jdbc:mysql://host:3306/full-stack-ecommerce` |
| `spring.datasource.username` | Database username | `ecommerceapp` |
| `spring.datasource.password` | Database password | — |
| `allowed.origins` | CORS allowed origins | `http://ecommerce.thanhhuy.vn` |
| `okta.oauth2.client-id` | Okta OAuth 2.0 Client ID | — |
| `okta.oauth2.issuer` | Okta Issuer URL | — |

---

## 🗺 Roadmap

- [x] Xây dựng ứng dụng E-Commerce full-stack (Spring Boot + Angular)
- [x] Containerize với Docker (multi-stage builds)
- [x] Thiết lập CI pipeline với GitHub Actions
- [x] Tích hợp ArgoCD cho GitOps deployment
- [x] Thêm Kubernetes manifests (Deployment, Service, Ingress, ConfigMap, Secret)
- [ ] Thiết lập Helm Charts cho parameterized deployments
- [ ] Tích hợp Prometheus + Grafana cho monitoring
- [x] Thêm Horizontal Pod Autoscaler (HPA)
- [x] Cấu hình Ingress Controller với TLS/SSL
- [ ] Triển khai staging & production environments
- [ ] Thêm integration tests vào CI pipeline
- [ ] Setup SonarQube cho code quality scanning

---

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh! Hãy làm theo các bước sau:

1. **Fork** repository
2. Tạo **feature branch** (`git checkout -b feature/tinh-nang-moi`)
3. **Commit** thay đổi (`git commit -m 'feat: thêm tính năng mới'`)
4. **Push** lên branch (`git push origin feature/tinh-nang-moi`)
5. Mở **Pull Request**

### Quy ước commit message

| Prefix | Mô tả |
|--------|-------|
| `feat:` | Tính năng mới |
| `fix:` | Sửa lỗi |
| `docs:` | Cập nhật tài liệu |
| `refactor:` | Tái cấu trúc code |
| `ci:` | Thay đổi CI/CD |
| `chore:` | Công việc bảo trì |

---

## 📄 Giấy phép

Dự án này được phân phối dưới giấy phép **MIT**. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

---

<div align="center">

**⭐ Nếu dự án hữu ích, hãy cho một star để ủng hộ! ⭐**

Được xây dựng với ❤️ bởi [Nguyen Thanh Huy](https://github.com/Nguyen-Thanh-Huy-io)

</div>
