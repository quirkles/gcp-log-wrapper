export const ResourceType = {
  //   "aiplatform.googleapis.com/DeploymentResourcePool":
  //     "aiplatform.googleapis.com/DeploymentResourcePool",
  //   "aiplatform.googleapis.com/Endpoint": "aiplatform.googleapis.com/Endpoint",
  //   "aiplatform.googleapis.com/Featurestore":
  //     "aiplatform.googleapis.com/Featurestore",
  //   "aiplatform.googleapis.com/IndexEndpoint":
  //     "aiplatform.googleapis.com/IndexEndpoint",
  //   "aiplatform.googleapis.com/PipelineJob":
  //     "aiplatform.googleapis.com/PipelineJob",
  //   "alloydb.googleapis.com/Instance": "alloydb.googleapis.com/Instance",
  //   api: "api",
  //   "apigateway.googleapis.com/Gateway": "apigateway.googleapis.com/Gateway",
  //   "apigee.googleapis.com/Environment": "apigee.googleapis.com/Environment",
  //   app_script_function: "app_script_function",
  //   assistant_action: "assistant_action",
  //   assistant_action_project: "assistant_action_project",
  //   audited_resource: "audited_resource",
  //   autoscaler: "autoscaler",
  //   aws_alb_load_balancer: "aws_alb_load_balancer",
  //   aws_cloudfront_distribution: "aws_cloudfront_distribution",
  //   aws_dynamodb_table: "aws_dynamodb_table",
  //   aws_ebs_volume: "aws_ebs_volume",
  //   aws_ec2_instance: "aws_ec2_instance",
  //   aws_elasticache_cluster: "aws_elasticache_cluster",
  //   aws_elb_load_balancer: "aws_elb_load_balancer",
  //   aws_emr_cluster: "aws_emr_cluster",
  //   aws_kinesis_stream: "aws_kinesis_stream",
  //   aws_lambda_function: "aws_lambda_function",
  //   aws_rds_database: "aws_rds_database",
  //   aws_redshift_cluster: "aws_redshift_cluster",
  //   aws_s3_bucket: "aws_s3_bucket",
  //   aws_ses: "aws_ses",
  //   aws_sns_topic: "aws_sns_topic",
  //   aws_sqs_queue: "aws_sqs_queue",
  //   "baremetalsolution.googleapis.com/Instance":
  //     "baremetalsolution.googleapis.com/Instance",
  //   "batch.googleapis.com/Job": "batch.googleapis.com/Job",
  //   "bigquery.googleapis.com/SparkJob": "bigquery.googleapis.com/SparkJob",
  //   bigquery_biengine_model: "bigquery_biengine_model",
  //   bigquery_dataset: "bigquery_dataset",
  //   bigquery_dts_config: "bigquery_dts_config",
  //   bigquery_project: "bigquery_project",
  //   bigquery_resource: "bigquery_resource",
  //   billing_account: "billing_account",
  //   build: "build",
  //   "certificatemanager.googleapis.com/Project":
  //     "certificatemanager.googleapis.com/Project",
  //   client_auth_config_brand: "client_auth_config_brand",
  //   client_auth_config_client: "client_auth_config_client",
  //   cloud_composer_environment: "cloud_composer_environment",
  //   cloud_dataproc_batch: "cloud_dataproc_batch",
  //   cloud_dataproc_cluster: "cloud_dataproc_cluster",
  //   cloud_dataproc_job: "cloud_dataproc_job",
  //   cloud_dataproc_session: "cloud_dataproc_session",
  //   cloud_debugger_resource: "cloud_debugger_resource",
  cloud_function: "cloud_function",
  // cloud_run_job: "cloud_run_job",
  cloud_run_revision: "cloud_run_revision",
  //   cloud_scheduler_job: "cloud_scheduler_job",
  //   cloud_tasks_queue: "cloud_tasks_queue",
  //   "clouddeploy.googleapis.com/DeliveryPipeline":
  //     "clouddeploy.googleapis.com/DeliveryPipeline",
  //   cloudiot_device: "cloudiot_device",
  //   cloudiot_device_registry: "cloudiot_device_registry",
  //   cloudkms_cryptokey: "cloudkms_cryptokey",
  //   cloudkms_cryptokeyversion: "cloudkms_cryptokeyversion",
  //   cloudkms_keyring: "cloudkms_keyring",
  //   cloudml_job: "cloudml_job",
  //   cloudml_model_version: "cloudml_model_version",
  //   cloudsql_database: "cloudsql_database",
  //   "cloudvolumesgcp-api.netapp.com/CloudVolume":
  //     "cloudvolumesgcp-api.netapp.com/CloudVolume",
  //   "compute.googleapis.com/PrivateServiceConnectEndpoint":
  //     "compute.googleapis.com/PrivateServiceConnectEndpoint",
  //   "connectors.googleapis.com/Connection":
  //     "connectors.googleapis.com/Connection",
  //   consumed_api: "consumed_api",
  //   container: "container",
  //   csr_repository: "csr_repository",
  //   dataflow_step: "dataflow_step",
  //   "dataform.googleapis.com/Repository": "dataform.googleapis.com/Repository",
  //   "datamigration.googleapis.com/MigrationJob":
  //     "datamigration.googleapis.com/MigrationJob",
  //   "dataplex.googleapis.com/Asset": "dataplex.googleapis.com/Asset",
  //   "dataplex.googleapis.com/DataScan": "dataplex.googleapis.com/DataScan",
  //   "dataplex.googleapis.com/Environment": "dataplex.googleapis.com/Environment",
  //   "dataplex.googleapis.com/GovernanceRule":
  //     "dataplex.googleapis.com/GovernanceRule",
  //   "dataplex.googleapis.com/Lake": "dataplex.googleapis.com/Lake",
  //   "dataplex.googleapis.com/Project": "dataplex.googleapis.com/Project",
  //   "dataplex.googleapis.com/Task": "dataplex.googleapis.com/Task",
  //   "dataplex.googleapis.com/Zone": "dataplex.googleapis.com/Zone",
  // datastore_database: "datastore_database",
  //   datastore_index: "datastore_index",
  //   "datastream.googleapis.com/Stream": "datastream.googleapis.com/Stream",
  //   dell_emc_cloud_onefs_cluster: "dell_emc_cloud_onefs_cluster",
  //   deployment: "deployment",
  //   deployment_manager_manifest: "deployment_manager_manifest",
  //   deployment_manager_operation: "deployment_manager_operation",
  //   deployment_manager_resource: "deployment_manager_resource",
  //   deployment_manager_type: "deployment_manager_type",
  //   "dialogflow.googleapis.com/Location": "dialogflow.googleapis.com/Location",
  //   dns_managed_zone: "dns_managed_zone",
  //   dns_policy: "dns_policy",
  //   dns_query: "dns_query",
  //   "edgecache.googleapis.com/EdgeCacheRouteRule":
  //     "edgecache.googleapis.com/EdgeCacheRouteRule",
  //   firebase_auth: "firebase_auth",
  //   firebase_domain: "firebase_domain",
  //   firebase_namespace: "firebase_namespace",
  //   firebaserules_release: "firebaserules_release",
  //   firebaserules_ruleset: "firebaserules_ruleset",
  // "firestore.googleapis.com/Database": "firestore.googleapis.com/Database",
  //   "fleetengine.googleapis.com/DeliveryFleet":
  //     "fleetengine.googleapis.com/DeliveryFleet",
  //   "fleetengine.googleapis.com/Fleet": "fleetengine.googleapis.com/Fleet",
  //   folder: "folder",
  //   gae_app: "gae_app",
  //   gateway_scope: "gateway_scope",
  //   gce_autoscaler: "gce_autoscaler",
  //   gce_backend_bucket: "gce_backend_bucket",
  //   gce_backend_service: "gce_backend_service",
  //   gce_client_ssl_policy: "gce_client_ssl_policy",
  //   gce_commitment: "gce_commitment",
  //   gce_disk: "gce_disk",
  //   gce_firewall_rule: "gce_firewall_rule",
  //   gce_forwarding_rule: "gce_forwarding_rule",
  //   gce_health_check: "gce_health_check",
  //   gce_image: "gce_image",
  //   gce_instance: "gce_instance",
  //   gce_instance_group: "gce_instance_group",
  //   gce_instance_group_manager: "gce_instance_group_manager",
  //   gce_instance_template: "gce_instance_template",
  //   gce_license: "gce_license",
  //   gce_network: "gce_network",
  //   gce_network_endpoint_group: "gce_network_endpoint_group",
  //   gce_network_region: "gce_network_region",
  //   gce_node_group: "gce_node_group",
  //   gce_node_template: "gce_node_template",
  //   gce_operation: "gce_operation",
  //   gce_packet_mirroring: "gce_packet_mirroring",
  //   gce_project: "gce_project",
  //   gce_reserved_address: "gce_reserved_address",
  //   gce_resource_policy: "gce_resource_policy",
  //   gce_route: "gce_route",
  //   gce_router: "gce_router",
  //   gce_service_attachment: "gce_service_attachment",
  //   gce_snapshot: "gce_snapshot",
  //   gce_ssl_certificate: "gce_ssl_certificate",
  //   gce_subnetwork: "gce_subnetwork",
  //   gce_target_http_instance: "gce_target_http_instance",
  //   gce_target_http_proxy: "gce_target_http_proxy",
  //   gce_target_https_proxy: "gce_target_https_proxy",
  //   gce_target_pool: "gce_target_pool",
  //   gce_target_ssl_proxy: "gce_target_ssl_proxy",
  //   gce_url_map: "gce_url_map",
  //   gcs_bucket: "gcs_bucket",
  //   generic_node: "generic_node",
  //   generic_task: "generic_task",
  //   genomics_dataset: "genomics_dataset",
  //   genomics_operation: "genomics_operation",
  //   gke_cluster: "gke_cluster",
  //   gke_nodepool: "gke_nodepool",
  //   "gkebackup.googleapis.com/BackupPlan": "gkebackup.googleapis.com/BackupPlan",
  //   "gkebackup.googleapis.com/RestorePlan":
  //     "gkebackup.googleapis.com/RestorePlan",
  global: "global",
  //   http_external_regional_lb_rule: "http_external_regional_lb_rule",
  //   http_load_balancer: "http_load_balancer",
  //   iam_role: "iam_role",
  //   identitytoolkit_project: "identitytoolkit_project",
  //   identitytoolkit_tenant: "identitytoolkit_tenant",
  //   "ids.googleapis.com/Endpoint": "ids.googleapis.com/Endpoint",
  //   "integrations.googleapis.com/IntegrationVersion":
  //     "integrations.googleapis.com/IntegrationVersion",
  //   "issuerswitch.googleapis.com/UPIInstance":
  //     "issuerswitch.googleapis.com/UPIInstance",
  //   istio_control_plane: "istio_control_plane",
  //   k8s_cluster: "k8s_cluster",
  //   k8s_container: "k8s_container",
  //   k8s_control_plane_component: "k8s_control_plane_component",
  //   k8s_node: "k8s_node",
  //   k8s_pod: "k8s_pod",
  //   k8s_service: "k8s_service",
  //   l4_proxy_rule: "l4_proxy_rule",
  //   "livestream.googleapis.com/Channel": "livestream.googleapis.com/Channel",
  //   "loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule":
  //     "loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule",
  //   "loadbalancing.googleapis.com/InternalNetworkLoadBalancerRule":
  //     "loadbalancing.googleapis.com/InternalNetworkLoadBalancerRule",
  //   logging_bucket: "logging_bucket",
  //   logging_exclusion: "logging_exclusion",
  //   logging_log: "logging_log",
  //   logging_sink: "logging_sink",
  //   managed_service: "managed_service",
  //   mesh: "mesh",
  //   "metastore.googleapis.com/Federation": "metastore.googleapis.com/Federation",
  //   "metastore.googleapis.com/Service": "metastore.googleapis.com/Service",
  //   metric: "metric",
  //   microsoft_ad_domain: "microsoft_ad_domain",
  //   ml_job: "ml_job",
  //   "mobilitybilling.googleapis.com/Project":
  //     "mobilitybilling.googleapis.com/Project",
  //   nat_gateway: "nat_gateway",
  //   netapp_cloud_volume: "netapp_cloud_volume",
  //   network_security_policy: "network_security_policy",
  //   "networking.googleapis.com/Location": "networking.googleapis.com/Location",
  //   "networksecurity.googleapis.com/FirewallEndpoint":
  //     "networksecurity.googleapis.com/FirewallEndpoint",
  //   "networksecurity.googleapis.com/ProtectedEndpoint":
  //     "networksecurity.googleapis.com/ProtectedEndpoint",
  //   "networkservices.googleapis.com/Gateway":
  //     "networkservices.googleapis.com/Gateway",
  //   organization: "organization",
  //   project: "project",
  //   pubsub_snapshot: "pubsub_snapshot",
  //   pubsub_subscription: "pubsub_subscription",
  //   pubsub_topic: "pubsub_topic",
  //   "recaptchaenterprise.googleapis.com/Key":
  //     "recaptchaenterprise.googleapis.com/Key",
  //   recommender: "recommender",
  //   recommender_insight_type: "recommender_insight_type",
  //   redis_instance: "redis_instance",
  //   remotebuild_instance: "remotebuild_instance",
  //   reported_errors: "reported_errors",
  //   "secretmanager.googleapis.com/Secret": "secretmanager.googleapis.com/Secret",
  //   "sensitiveaction.googleapis.com/Location":
  //     "sensitiveaction.googleapis.com/Location",
  //   service_account: "service_account",
  //   service_config: "service_config",
  //   service_rollout: "service_rollout",
  //   servicedirectory_namespace: "servicedirectory_namespace",
  //   servicedirectory_service: "servicedirectory_service",
  //   serviceusage_service: "serviceusage_service",
  //   serviceuser_service: "serviceuser_service",
  //   spanner_instance: "spanner_instance",
  //   storage_transfer_job: "storage_transfer_job",
  //   "stream.googleapis.com/StreamInstance":
  //     "stream.googleapis.com/StreamInstance",
  //   tcp_ssl_proxy_rule: "tcp_ssl_proxy_rule",
  //   testservice_matrix: "testservice_matrix",
  //   threat_detector: "threat_detector",
  //   tpu_worker: "tpu_worker",
  //   "transferappliance.googleapis.com/Appliance":
  //     "transferappliance.googleapis.com/Appliance",
  //   uptime_url: "uptime_url",
  //   "videostitcher.googleapis.com/Project":
  //     "videostitcher.googleapis.com/Project",
  //   "visionai.googleapis.com/Application": "visionai.googleapis.com/Application",
  //   "vmmigration.googleapis.com/MigratingVM":
  //     "vmmigration.googleapis.com/MigratingVM",
  //   "vmmigration.googleapis.com/Source": "vmmigration.googleapis.com/Source",
  //   vpc_access_connector: "vpc_access_connector",
  //   vpn_gateway: "vpn_gateway",
  //   vpn_tunnel: "vpn_tunnel",
  //   "workflows.googleapis.com/Workflow": "workflows.googleapis.com/Workflow",
  //   dataproc_cluster: "dataproc_cluster",
  //   gke_container: "gke_container",
} as const;

export type ResourceType = keyof typeof ResourceType;

export type ResourceLabel<Resource extends ResourceType> = Partial<
  Resource extends typeof ResourceType.cloud_function
    ? {
        project_id: string;
        function_name: string;
        region: string;
      }
    : Resource extends typeof ResourceType.cloud_run_revision
      ? {
          project_id: string;
          service_name: string;
          revision_name: string;
          location: string;
          configuration_name: string;
        }
      : Resource extends typeof ResourceType.global
        ? Record<string, string>
        : never
>;
