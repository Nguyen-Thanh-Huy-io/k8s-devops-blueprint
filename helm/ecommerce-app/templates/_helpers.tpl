{{/*
Tạo fullname cho resources
*/}}
{{- define "ecommerce.fullname" -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Label chung cho tất cả resources
*/}}
{{- define "ecommerce.labels" -}}
app.kubernetes.io/managed-by: {{ .Release.Service }}
app.kubernetes.io/instance: {{ .Release.Name }}
helm.sh/chart: {{ .Chart.Name }}-{{ .Chart.Version }}
{{- end }}

{{/*
Backend labels
*/}}
{{- define "ecommerce.backend.labels" -}}
app: ecommerce-backend
{{ include "ecommerce.labels" . }}
{{- end }}

{{/*
Backend selector labels
*/}}
{{- define "ecommerce.backend.selectorLabels" -}}
app: ecommerce-backend
{{- end }}

{{/*
Frontend labels
*/}}
{{- define "ecommerce.frontend.labels" -}}
app: ecommerce-frontend
{{ include "ecommerce.labels" . }}
{{- end }}

{{/*
Frontend selector labels
*/}}
{{- define "ecommerce.frontend.selectorLabels" -}}
app: ecommerce-frontend
{{- end }}
