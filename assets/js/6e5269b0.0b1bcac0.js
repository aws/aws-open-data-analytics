"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7584],{7164:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var s=a(4848),i=a(8453);const n={},r="Data Integrity / High Availability",o={id:"bestpractices/Applications/HBase/data_integrity",title:"Data Integrity / High Availability",description:"The following document illustrates architectures and service features that can be combined to implement Highly Available architectures and Disaster Recovery solutions for HBase clusters running on Amazon EMR. The document also describes additional best practices for data recovery in case of integrity issues you might face when using HBase.",source:"@site/docs/bestpractices/Applications/HBase/data_integrity.md",sourceDirName:"bestpractices/Applications/HBase",slug:"/bestpractices/Applications/HBase/data_integrity",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/HBase/data_integrity",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bestpractices/Applications/HBase/data_integrity.md",tags:[],version:"current",frontMatter:{},sidebar:"bestpractices",previous:{title:"Best Practices for Amazon S3",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/HBase/best_practice_s3"},next:{title:"Data Migration",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/HBase/data_migration"}},l={},c=[{value:"Best Practice",id:"best-practice",level:2},{value:"HBase on HDFS",id:"hbase-on-hdfs",level:2},{value:"HBase - Snapshots",id:"hbase---snapshots",level:3},{value:"HBase - Cluster Replication",id:"hbase---cluster-replication",level:3},{value:"Active - Active architecture",id:"active---active-architecture",level:4},{value:"Active - Passive architecture",id:"active---passive-architecture",level:4},{value:"Multi Region architecture",id:"multi-region-architecture",level:4},{value:"HBase on Amazon S3",id:"hbase-on-amazon-s3",level:2},{value:"Storage Classes",id:"storage-classes",level:3},{value:"HBase - Snapshots",id:"hbase---snapshots-1",level:3},{value:"HBase - Cluster Replication",id:"hbase---cluster-replication-1",level:3},{value:"Amazon EMR - Read Replica",id:"amazon-emr---read-replica",level:3},{value:"Amazon S3 - Object Replication",id:"amazon-s3---object-replication",level:3},{value:"HBase WALs",id:"hbase-wals",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"data-integrity--high-availability",children:"Data Integrity / High Availability"})}),"\n",(0,s.jsx)(t.p,{children:"The following document illustrates architectures and service features that can be combined to implement Highly Available architectures and Disaster Recovery solutions for HBase clusters running on Amazon EMR. The document also describes additional best practices for data recovery in case of integrity issues you might face when using HBase."}),"\n",(0,s.jsx)(t.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,s.jsxs)(t.p,{children:["When working with HBase on Amazon EMR, it is good practice to enable the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-ha.html",children:"EMR Multimaster"})," feature that allows you to launch three EMR master nodes. This functionality allows the HBase cluster to tolerate impairments that might occur if a single master goes down. Please note that EMR on EC2 launches all the nodes of the cluster within the same Availability Zone, so this solution is not sufficient to create a robust setup for high available clusters."]}),"\n",(0,s.jsx)(t.p,{children:"Nevertheless, this functionality is highly recommended both when using HDFS or Amazon S3 as storage layer. Enabling this, allows you to serve HBase requests (both writes and reads) in case of a master failure. Please note that if you launch the EMR cluster with a single master and this node is terminated for any reason, it will not be possible to recover any data from the HDFS storage of the cluster as the HDFS metadata will be lost after the termination of the EMR master."}),"\n",(0,s.jsxs)(t.p,{children:["Moreover, it is also recommended to specify a SPREAD placement group strategy that places the master instances across separate underlying hardware to guard against the loss of multiple master nodes in the event of a hardware failure. For additional details see ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-ha-placementgroup.html",children:"Amazon EMR integration with EC2 placement groups"})]}),"\n",(0,s.jsxs)(t.p,{children:["In terms of cluster scale in / out, it\u2019s not recommended to enable the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-scaling.html",children:"EMR Managed Scaling"})," or the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html",children:"EMR scaling with custom policies"})," when using HBase. These features are designed to operate with YARN workloads, so they might cause data integrity issues if some nodes are terminated by the scaling policies. In case you need to scale your HBase cluster size, you can follow the below procedures:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Scale Out - Use the EMR Web Console or API to increase the number of nodes. New nodes are automatically recognized once they join the cluster, and the HBase balancer will automatically spread regions across new nodes."}),"\n",(0,s.jsx)(t.li,{children:"Scale In - Disable the HBase tables and use the EMR Web Console or API to decrease the number of nodes in the cluster."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"hbase-on-hdfs",children:"HBase on HDFS"}),"\n",(0,s.jsx)(t.p,{children:"Within this section you can find additional information to secure your data when launching an Amazon EMR cluster using HDFS as storage layer."}),"\n",(0,s.jsx)(t.p,{children:"As best practice is recommended to launch the EMR cluster using at least 4 CORE nodes. When you launch an EMR cluster with at least 4 CORE nodes, the default HDFS replication factor will be automatically set to 2 by the EMR service. This prevents to lose data in case some CORE nodes get terminated. Please note that you cannot recover a HDFS block if all its replicas are lost (e.g. all CORE nodes containing a specific HDFS block and its replica are terminated). If you want a stronger guarantee about the availability of your data, launch the EMR cluster with at least 10 CORE nodes (this will set the default replication factor to 3), or manually specify the HDFS replication factor using the EMR Configuration API."}),"\n",(0,s.jsxs)(t.p,{children:["If you specify the HDFS replication manually, please make sure to have a sufficient number of CORE nodes to allocate all the replica of your data. For more details see ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hdfs-config.html",children:"HDFS configuration"})," in the Amazon EMR documentation."]}),"\n",(0,s.jsx)(t.h3,{id:"hbase---snapshots",children:"HBase - Snapshots"}),"\n",(0,s.jsxs)(t.p,{children:["HBase snapshots should be considered the first line of defense against data integrity issues that might cause a service disruption in your HBase cluster. To prevent any kind of data loss, is highly recommended to perform daily snapshots of your HBase tables. Please note that taking a snapshot of a table does not involve any data copy operation, so this operation doesn\u2019t generate any additional data in your HDFS storage.\nHowever, it is not recommended to maintain a high number of snapshots for a table, especially if its data change frequently. Modified regions that are used by old snapshots are preserved in the ",(0,s.jsx)(t.strong,{children:"archive"})," folder within the HBase root directory, so this can have a significant impact on the amount of data retained in the HDFS."]}),"\n",(0,s.jsx)(t.p,{children:"Besides, please note that HBase snapshots are by default persisted in the same storage layer configured when launching the cluster (in this case HDFS), so they should not be considered a strong disaster recovery mechanism if you want to protect your data in case of a cluster termination. In this case, you can export the snapshots in an Amazon S3 bucket to persist all your data on a reliable storage layer."}),"\n",(0,s.jsxs)(t.p,{children:["Please note that periodic snapshots exports to S3 are recommended only if your tables have a small size (less than few TB) as an HBase export will copy all the data belonging to the snapshot in the S3 bucket using a Map Reduce job.\nFor sample scripts and commands see the related examples in the ",(0,s.jsx)(t.a,{href:"/aws-emr-best-practices/docs/bestpractices/Applications/HBase/data_migration",children:"Data Migration"})," guide."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Additional Tips"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Use a time identifier in the snapshot name that can help you identify when the snapshot was created. The creation time is also present in the snapshot metadata, but using this convention in the name can save some time while restoring an impaired cluster."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"hbase---cluster-replication",children:"HBase - Cluster Replication"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://hbase.apache.org/book.html#_cluster_replication",children:"HBase cluster replication"})," allows you to keep one or more HBase clusters synchronized between each other. Depending on how you set up the replication and peering between the clusters you can achieve different configurations to establish both a Disaster Recovery or a Highly Available setup depending on your needs."]}),"\n",(0,s.jsx)(t.p,{children:"The following sections describe typical architectures that can be achieved with this feature."}),"\n",(0,s.jsx)(t.h4,{id:"active---active-architecture",children:"Active - Active architecture"}),"\n",(0,s.jsx)(t.p,{children:"This first approach describes a setup that is suitable to provide Highly Available clusters that can both serve read and write requests. In this case is required to set up a two-way replication peering between the Primary and Secondary cluster as described in the below figure. In this architecture both reads and writes will be routed across the two clusters by the Elastic Load Balancer and data written in a cluster will also be replicated in the other one."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"HBase - Cluster Replication",src:a(9043).A+"",title:"HBase - Cluster Replication",width:"721",height:"641"})}),"\n",(0,s.jsx)(t.p,{children:"To setup this architecture you should performed the following steps:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create two HBase clusters in different AWS Availability Zones"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create an ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/elasticloadbalancing/",children:"Elastic Load Balancer"})," using an ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-target-group.html",children:"EC2 Target Group"})," configured with the following specifications:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Target Type"}),": IP addresses. EMR master IP for the Primary and Secondary cluster"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Protocol"}),": TCP"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Port:"})," 2181. Default port used by the Zookeeper service"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Establish a Two Way replication peering between the two clusters. To enable the replication, you can run the following commands on each master node. While running these commands, please make sure to replace ",(0,s.jsx)(t.strong,{children:"MASTER_NODE_IP"})," with the IP address of the other master node. For example, if running the commands on the Primary the ",(0,s.jsx)(t.strong,{children:"MASTER_IP"})," should be set with the Secondary IP address."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'HBASE_CMD="sudo -u hbase hbase"\nMASTER_IP="MASTER_NODE_IP"\nPEER_NAME="aws"\n\n## Create peering with the destination cluster\necho "add_peer \'$PEER_NAME\', CLUSTER_KEY => \'$MASTER_IP:2181:/hbase\'" | $HBASE_CMD shell\n\n## List peers in the source cluster\necho "list_peers" | $HBASE_CMD shell\n\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Make sure the HBase tables you want to replicate are already available in both EMR clusters, If your tables need to be initialized with the same data use the HBase snapshots to make sure they contain the same data."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Enable the table replication using the following snippet for each table you want to replicate on both clusters"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'## Enable replication\nTABLE_NAME="YOUR_TABLE_NAME"\nHBASE_CMD="sudo -u hbase hbase"\necho "enable_table_replication \'$TABLE_NAME\'" | $HBASE_CMD shell\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["To leverage this setup, specify the Network Load Balancer endpoint in the ",(0,s.jsx)(t.strong,{children:"hbase.zookeeper.quorum"})," property used by your client applications."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This setup can tolerate impairments of an Availability Zone within the same Region and provides the best performance if you need milliseconds / sub milliseconds responses from your clusters. Please note that by default the HBase replication is an asynchronous process executed in background, and replicates WAL data across the clusters for which the replication is enabled. This means that this feature does not guarantee strong consistency when reading data. So carefully evaluate if this meet your business needs."}),"\n",(0,s.jsx)(t.p,{children:"In case one of the two cluster is terminated or needs to be upgraded, you have to re-create the HBase peering for the new cluster and restore the table\u2019s data and metadata in the new cluster."}),"\n",(0,s.jsx)(t.h4,{id:"active---passive-architecture",children:"Active - Passive architecture"}),"\n",(0,s.jsx)(t.p,{children:"In a similar way as before, you can set up an Active / Passive architecture that can serve DR purposes. This can be useful if you want to have a backup cluster you can switch to in case of issues on the Primary one. The following picture highlights the overall architecture setup and components."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"HBase - Cluster Replication - OneWay",src:a(9016).A+"",title:"HBase - Cluster Replication - OneWay",width:"721",height:"641"})}),"\n",(0,s.jsx)(t.p,{children:"In order to implement the following architecture, you can perform the steps below:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create two EMR clusters in separate Availability Zones"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create a ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-creating.html",children:"Route53 Private Hosted Zone"})," and ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-creating.html",children:"create an A record"})," pointing to the EMR Master you want to act as Primary. If using the EMR Multi-Master feature, it is recommended to add all the 3 Master nodes in the record set"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Establish a One Way HBase replication from the EMR Primary to EMR Secondary to replicate data to the Secondary cluster. In this case, you can use the commands previously shared and execute them on the EMR Primary cluster only."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Once done, specify the Route53 A record previously defined to route your client applications to the EMR Primary cluster."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This architecture serves mainly to implement a DR strategy for your HBase data. However, you can still leverage the Secondary cluster as a read replica of your data to reduce read requests on the Primary EMR Cluster. However, if you want to implement this scenario, please make sure that only client applications that have to perform READ operations (e.g. SCAN, GET) connect to the Secondary EMR cluster."}),"\n",(0,s.jsx)(t.p,{children:"In case of failures on the EMR Primary cluster, you\u2019ll be able to route your client application traffic to the Secondary EMR cluster by changing the IP address in the A record defined in the Route55 Private Hosted Zone. Please note that your client applications might face some failures while the A record update takes place."}),"\n",(0,s.jsx)(t.h4,{id:"multi-region-architecture",children:"Multi Region architecture"}),"\n",(0,s.jsxs)(t.p,{children:["If you have a business requirement that requires to replicate HBase data in different AWS Regions, you can still leverage the HBase cluster replication feature to synchronize data between two clusters. The setup is very similar to what previously described, but requires to establish an inter-region ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html",children:"VPC peering"})," between the two AWS Regions, so that HBase clusters can exchange data between each other. An example multi region Active / Active setup is depicted in the below figure."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"HBase - Cluster Replication - Cross",src:a(8501).A+"",title:"HBase - Cluster Replication - Cross",width:"801",height:"681"})}),"\n",(0,s.jsx)(t.h2,{id:"hbase-on-amazon-s3",children:"HBase on Amazon S3"}),"\n",(0,s.jsx)(t.p,{children:"The following section provides architectures and best practices that you can use to implement Disaster Recovery (DR) strategies and Highly Available clusters when using Amazon S3 as storage layer for your HBase clusters."}),"\n",(0,s.jsx)(t.h3,{id:"storage-classes",children:"Storage Classes"}),"\n",(0,s.jsxs)(t.p,{children:["When using Amazon S3 as storage layer for your HBase cluster, all the objects created in the bucket by HBase will be created using the default ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",children:"S3 Standard"})," storage class. In this case your data will be redundantly stored on a minimum of three Availability Zones within the same AWS Region. This ensures that your data is still available in your HBase cluster, either if there is an impairment in one Availability Zone."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to maintain this level of data availability in case of AZ failures, it is not recommended to set any ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html",children:"S3 Lifecycle configuration"})," that might transition HBase files in a storage class that will reduce the internal S3 data replication (e.g. S3 One Zone-IA)."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Additional Tips"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Always use dedicated S3 Buckets for your HBase on S3 clusters. This minimize chances of API throttling in case other processes or applications (e.g. Spark ETL jobs) are also using the same HBase bucket."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"hbase---snapshots-1",children:"HBase - Snapshots"}),"\n",(0,s.jsx)(t.p,{children:"Although Amazon S3 already provides native functionalities to replicate objects across multiple Availability Zones, this doesn\u2019t protect you in case of application issues that might corrupt your HBase data."}),"\n",(0,s.jsxs)(t.p,{children:["In this case, is good practice to leverage HBase existing capabilities to create periodic snapshots of your tables so that you can recover / restore tables in case of HBase inconsistencies or similar data integrity issues. Apache HBase stores snapshot data (store files and metadata) in the ",(0,s.jsx)(t.code,{children:"archive"})," and ",(0,s.jsx)(t.code,{children:".hbase-snapshot"})," folders within the HBase root path. When using Amazon S3 as storage layer, this data will be replicated across multiple Availability Zones as well, as their content will be stored by default in the S3 bucket."]}),"\n",(0,s.jsx)(t.p,{children:"We recommend to create HBase snapshots using the same S3 bucket used while launching the cluster (default behavior). In this way, snapshots will leverage incremental capabilities during the snapshot creation thus minimizing the footprint of data stored in the bucket. Please note that exporting a HBase snapshot in a different S3 bucket or prefix, will force HBase to copy all data required by the snapshot. For this reason, if you manage large clusters (hundred of TB or PB data), it\u2019s not recommended to export snapshots in different AWS Regions or S3 Buckets using this approach."}),"\n",(0,s.jsx)(t.h3,{id:"hbase---cluster-replication-1",children:"HBase - Cluster Replication"}),"\n",(0,s.jsx)(t.p,{children:"As previously described in the HDFS section, the HBase Cluster Replication can be used to create a Highly Available cluster, or to implement different DR solutions depending on your business requirements."}),"\n",(0,s.jsx)(t.p,{children:"When using Amazon S3 as storage layer, it\u2019s important to remember that two HBase clusters cannot share the same S3 root directory, when they both receive write requests, as this might lead to data inconsistencies. For this reason, you should always use separate buckets for each individual HBase cluster, or as alternative use different prefixes within the same S3 bucket. This latest solution however is not ideal as it might increase the chances to face S3 throttling issues."}),"\n",(0,s.jsx)(t.h3,{id:"amazon-emr---read-replica",children:"Amazon EMR - Read Replica"}),"\n",(0,s.jsx)(t.p,{children:"The EMR HBase Read Replica feature can be used to provide High Available reads for your HBase clusters using S3 as storage layer. Although this feature does not provide additional benefits for a DR recovery mechanism, it can still be useful to serve HBase read requests, in case you want to perform a Blue / Green deployment to modify a cluster configuration on the primary Amazon EMR cluster that requires the termination of the cluster (e.g. EMR release version upgrade)"}),"\n",(0,s.jsxs)(t.p,{children:["For additional details see ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hbase-s3.html#emr-hbase-s3-read-replica",children:"Using a read-replica cluster"})," in the Amazon EMR documentation."]}),"\n",(0,s.jsx)(t.h3,{id:"amazon-s3---object-replication",children:"Amazon S3 - Object Replication"}),"\n",(0,s.jsxs)(t.p,{children:["If you want to replicate your HBase data on a backup region for DR purposes, you might leverage the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html",children:"Amazon S3 Object Replication"})," feature. This can be used to replicate objects within the same AWS Region (Same-Region Replication) or in a different region (Cross-Region Replication). This approach can be used to implement a DR mechanism that allows you to launch a Secondary cluster in a different AWS Region in case you have an impairment in your Primary one."]}),"\n",(0,s.jsx)(t.p,{children:"The overall architecture is described in the below figure."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"HBase - S3 Object Replication",src:a(9285).A+"",title:"S3 Object Replication",width:"1241",height:"581"})}),"\n",(0,s.jsx)(t.p,{children:"This architecture requires you to use a DNS mechanism (for example using Route 53 hosted zones) so that you can switch between the AWS Regions in case of failures. This approach requires the following components:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Primary Amazon EMR cluster with his own dedicated S3 Bucket."}),"\n",(0,s.jsx)(t.li,{children:"Secondary Amazon EMR cluster that will only be launched in case of failures, with his own dedicated S3 bucket. The secondary cluster can be launched in the same AWS Region as the primary or in a different one depending on the requirements."}),"\n",(0,s.jsx)(t.li,{children:"Active S3 Replication between the Primary and the Secondary S3 buckets to replicate S3 objects"}),"\n",(0,s.jsxs)(t.li,{children:["A DNS setup that allows you to switch your HBase clients from the primary to the secondary in case of failures. For example this might be achieved using a ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-private.html",children:"Route 53 private hosted zones"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"As previously described, the Secondary cluster should only be launched in case of an impairment in the Primary Region or Availability Zone failure. The cluster can be launched with the same configurations and sizes as the primary, but should point to a different S3 bucket. We also recommend to launch the secondary cluster using the Amazon EMR HBase read replica feature to be sure that no new data will be written on the secondary cluster. This prevent the secondary cluster to receive new data, but simplify the recovery after an impairment."}),"\n",(0,s.jsx)(t.p,{children:"In order to enable the S3 Object Replication, you should follow the steps below:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Create two Amazon S3 buckets that will be respectively used to store production and replicated data. Make sure to enable the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html",children:"Amazon S3 Versioning"}),", as this functionality is required to enable the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-what-is-isnot-replicated.html",children:"S3 replication"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["In the primary bucket, create a new S3 replication rule to replicate data generated by the primary cluster. You can follow the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-example-walkthroughs.html",children:"example"})," in the Amazon S3 documentation to enable the replication in the bucket. While creating the replication rule, make sure to adhere the following best practices:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Enable the S3 Object Replication only for the HBase root prefix specified when launching the cluster. This help mitigating delay problems that might occur if you also have objects outside the HBase root prefix that should be replicated."}),"\n",(0,s.jsxs)(t.li,{children:["Enable the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-walkthrough-5.html",children:"Replication Time Control (RTC)"}),"capabilities. This feature is designed to replicate 99.99% of objects within 15 minutes after upload. Enabling this feature will also automatically enable the S3 replication metrics that are review the pending replication objects."]}),"\n",(0,s.jsxs)(t.li,{children:["Enable the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/delete-marker-replication.html",children:"Delete Marker Replication"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Additionally, is also recommend to create a ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html",children:"Lifecycle Rule"})," to delete expired object delete markers, incomplete multipart uploads, and non current version of files."]}),"\n",(0,s.jsxs)(t.p,{children:["This architecture serves mainly to implement a cost effective DR strategy for your HBase data as only one active cluster will be running. In case of failover, before switching to the secondary cluster, check the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-metrics.html",children:"S3 replication metrics"})," to verify there are no pending objects to be replicated."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Additional Considerations"})}),"\n",(0,s.jsx)(t.p,{children:"Amazon EMR implements internal features that prevents the clusters to be terminated in case of Availability Zone or service issues. If your primary cluster cannot be reached, you might want to launch another cluster pointing to the same Amazon S3 bucket in a different AZ. However, this might lead to inconsistencies in case your Primary HBase cluster is not terminated as you might end up in a situation where two active HBase clusters are pointing to the same S3 root bucket. For this reason, you might want to implement the following safety measures in case of service issues:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If you only require to continue supporting HBase read operations, you can launch a backup cluster pointing to the same S3 root directory until we solve the problem. As alternative, if you\u2019re not able to determine if your cluster instances are terminated (e.g. the failure also impact your ability to use the EC2 service) you might contact our Support to verify if the cluster was terminated to decide launching a new active cluster instead of just launch a HBase read replica."}),"\n",(0,s.jsx)(t.li,{children:"If you want to continue to support HBase write requests within the same Region, you\u2019ll have to leverage a backup S3 bucket where data have been replicated using the S3 Object Replication or HBase cluster replication to avoid data inconsistencies if the Primary EMR cluster has not been yet terminated. As in the previous scenario, you can also contact our Support to determine if the Primary cluster was already terminated, but this might delay the recovery time."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"hbase-wals",children:"HBase WALs"}),"\n",(0,s.jsx)(t.p,{children:"When using Amazon S3 as storage layer, HBase still stores WALs on the local HDFS of the cluster. WALs are used internally by HBase to replay mutate operations in case of a region failure. Please note that every mutation request on HBase is first written on a WAL file, then in the HBase memstore and only after a Memstore flush this data will be persisted on S3. If the Amazon EMR cluster is terminated due to an incident, you might lose the latest data not yet persisted on S3."}),"\n",(0,s.jsxs)(t.p,{children:["In this case is a good practice to leverage a persistent event store solution, like ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/msk/",children:"Amazon MSK"})," or ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/kinesis/",children:"Amazon Kinesis"})," to retain the latest ingested data, so that you\u2019ll be able to replay any missing data from the moment of the service interruption."]}),"\n",(0,s.jsxs)(t.p,{children:["As alternative, you can configure your HBase cluster to store WALs on a persistent storage layer as an external HDFS cluster, or an ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html",children:"Amazon EFS"})," filesystem. This last solution might increase the latency of your write operations on HBase so you might want to verify if this solution met your SLA requirements. To configure WALs on Amazon EFS you can use the procedure described ",(0,s.jsx)(t.a,{href:"https://github.com/aws-samples/aws-emr-utilities/tree/main/applications/hbase-wal-efs",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"If you prefer to simply leverage another HDFS cluster, you can configure the new path using the following EMR Classification when launching your HBase Cluster."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\n    {\n        "classification": "hbase-site",\n        "properties": {\n            "hbase.wal.dir": "hdfs://HDFS_MASTER_NODE:8020/PATH"\n        }\n    }\n]\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Please note that the ",(0,s.jsx)(t.strong,{children:"PATH"})," used in the external HDFS cluster should be pre-created before launching the cluster and should be writable by the following user and group: ",(0,s.jsx)(t.strong,{children:"hbase"}),":",(0,s.jsx)(t.strong,{children:"hbase"}),". Additionally, if your external HDFS cluster is secured with Kerberos authentication, you also need to configure your HBase cluster with Kerberos, and both clusters should leverage the same Kerberos REALM to be able to communicate between each other. For additional information, see ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos-options.html#emr-kerberos-extkdc-summary",children:"External KDC"})," in the Amazon EMR documentation."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8501:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/hbase_replication_cross-20cdc5a7fb3622e63ba6d4c65d801ec8.png"},9016:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/hbase_replication_oneway-dd25e95d3767164a2dffd5d7b307f9c3.png"},9043:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/hbase_replication_simple-6997b752d6c320467009bde786c2f7e5.png"},9285:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/hbase_s3_replication-0bf81e9a7b1d2b45edd67f53ba282f6a.png"},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var s=a(6540);const i={},n=s.createContext(i);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);