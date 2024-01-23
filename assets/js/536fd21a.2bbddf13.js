"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7906],{5583:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var o=s(5893),a=s(1151);const n={sidebar_position:1,sidebar_label:"Introduction"},i="Introduction",r={id:"bestpractices/Applications/Hbase/introduction",title:"Introduction",description:"When working with Amazon EMR on EC2, you have the ability to choose between two deployment options for the underlying storage layer used by HBase: the Hadoop HDFS or Amazon S3.",source:"@site/docs/bestpractices/5 - Applications/Hbase/introduction.md",sourceDirName:"bestpractices/5 - Applications/Hbase",slug:"/bestpractices/Applications/Hbase/introduction",permalink:"/aws-open-data-analytics/docs/bestpractices/Applications/Hbase/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bestpractices/5 - Applications/Hbase/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"bestpractices",previous:{title:"Best Practices",permalink:"/aws-open-data-analytics/docs/bestpractices/Features/Spot Usage/best_practices"},next:{title:"Best Practices",permalink:"/aws-open-data-analytics/docs/bestpractices/Applications/Hbase/best_practice"}},c={},l=[{value:"Which storage layer should I use?",id:"which-storage-layer-should-i-use",level:2},{value:"Which instance should I use?",id:"which-instance-should-i-use",level:2},{value:"Number of HBase Regions",id:"number-of-hbase-regions",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["When working with Amazon EMR on EC2, you have the ability to choose between two deployment options for the underlying storage layer used by HBase: the ",(0,o.jsx)(t.a,{href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html",children:"Hadoop HDFS"})," or ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",children:"Amazon S3"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Although there are no restrictions in the use of these storage options, they serve different purposes, and they both have pros and cons with related performance implications. In this document, we are going to review the main aspects of each storage option."}),"\n",(0,o.jsx)(t.h2,{id:"which-storage-layer-should-i-use",children:"Which storage layer should I use?"}),"\n",(0,o.jsx)(t.p,{children:"Typically, to understand which storage layer you should use in your HBase cluster, you must determine what are your application requirements and decide what is most important between these two main decision drivers: performance or costs. Generally speaking, on a large cluster setup, HDFS provides better performance in most cases, while Amazon S3 provides better cost savings due to the reduced amount of storage required to persist all your data, and is the right option when you want to decouple your storage from compute."}),"\n",(0,o.jsx)(t.p,{children:"Using HDFS allows you to achieve the best performance for latency responses. This is true if you need milliseconds / sub-milliseconds read responses from HBase. You can also achieve similar results using Amazon S3 as storage layer, but this will require to rely on HBase caching features. Depending on your tables sizes, this can increase costs when provisioning resources for cache, as you\u2019ll have to provision more EBS volumes or use bigger instances to cache your data locally on the nodes, thus losing the main advantages of using Amazon S3. This requires to fine tune HBase to find the right balance between performance and cost for your workload."}),"\n",(0,o.jsxs)(t.p,{children:["Another common use case to choose HDFS over S3 is a data migration from an on premise cluster. This is typically recommended as first migration step, as this solution provides similar performance compared to your existing cluster. You can more easily migrate your infrastructure to the cloud, and later decide if it makes sense to use Amazon S3.\nBesides, using the HDFS for a data migration can be a requirement before moving to Amazon S3. Specifically this can help to optimize the underlying layout of your HBase tables if they have a considerable amount of small HBase regions, and you want to merge them. This operation can be more quickly be performed on an HDFS cluster, and you can later migrate the data to Amazon S3. For more details, see the sections ",(0,o.jsx)(t.a,{href:"/aws-open-data-analytics/docs/bestpractices/Applications/Hbase/management#reduce-number-of-regions",children:"Reduce number of Regions"})," and ",(0,o.jsx)(t.a,{href:"/aws-open-data-analytics/docs/bestpractices/Applications/Hbase/data_migration",children:"Data Migration"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Finally, using HDFS is also the right choice if you have a cluster that is mostly used for write intensive workloads. This is  because write intensive clusters are subject to intensive compaction and region splitting operations that are performed internally by HBase to manage the underlying data storage. In these cases, using Amazon S3 might not be the right option, because of data movements that occur between Amazon S3 and the cluster to perform compaction processes. This increases the time required to perform such operations, thus impacting the overall cluster performance resulting in higher latencies."}),"\n",(0,o.jsxs)(t.p,{children:["On the other side, Amazon S3 is a good option for read-intensive HBase clusters. One of the best use cases where S3 excels is when the data that is most frequently accessed (read or modified) is the most recent, while old data is rarely modified. You can use the pre-configured bucket cache, to store a hot copy of the most recent data on local disks of your cluster, thus maintaining a good compromise in terms of costs and performance. For more details, see ",(0,o.jsx)(t.a,{href:"/aws-open-data-analytics/docs/bestpractices/Applications/Hbase/best_practice_s3#hbase---bucket-cache",children:"Bucket Cache"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Another good use case for using Amazon S3 is when you have tables that rarely change over time, and you need to serve a large amount of read requests. In this case, you can opt for Amazon S3 in combination with the ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hbase-s3.html#emr-hbase-s3-read-replica",children:"EMR HBase read-replica"}),", to distribute your read requests across multiple clusters. For more details about this approach kindly see ",(0,o.jsx)(t.a,{href:"/aws-open-data-analytics/docs/bestpractices/Applications/Hbase/data_integrity#amazon-emr-read-replica",children:"Data Integrity"}),". Moreover, Amazon S3 provides stronger SLA for data durability and availability transparently at the storage level and will not be impacted by failures on EMR instances."]}),"\n",(0,o.jsxs)(t.p,{children:["Finally, one major benefit of relying on S3 for storage is cost saving. If you have significant costs in your cluster due to large amount of data stored on EBS volumes, moving to S3 can reduce costs drastically. Moreover, HDFS uses block replication to provide fault tolerance, which increases the footprint of data stored locally in your cluster. In Amazon EMR, the default ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hdfs-config.html",children:"HDFS replication"})," factor is defined automatically when launching the cluster (or you can override it manually using the ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html",children:"EMR configuration API"}),"). For large tables size this can drastically increase EBS storage costs, so you might want to leverage S3 where replication is handled natively by the service for a more convenient cost."]}),"\n",(0,o.jsx)(t.h2,{id:"which-instance-should-i-use",children:"Which instance should I use?"}),"\n",(0,o.jsx)(t.p,{children:"When talking about hardware requirements for HBase, it is very important to choose the right EC2 instance type when using HDFS as storage layer, as it might be prohibitive to change it once you have a live production cluster. On the other side, changing instances for an HBase cluster running on Amazon S3 is much easier as data is persisted on S3. This allows us to more easily terminate an EMR cluster without losing data and launch a new one using a different instance type. Below you can find some details that can help you to choose the right instances based on your use case / workloads requirements."}),"\n",(0,o.jsxs)(t.p,{children:["HBase typically performs better with small instances and when you spread the overall requests across multiple instances. This is because there are some limitations in the number of HBase regions a single Region Server can handle, and having a huge amount of regions on a single node can lead to issues and unexpected behavior. For more details on determining the right number of regions for a specific instance, see the section ",(0,o.jsx)(t.a,{href:"#number-of-hbase-regions",children:"Number of HBase Regions"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Generally speaking, if you want to achieve the best possible performance in your HBase cluster, it\u2019s highly recommended to use EC2 instances powered with an ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html",children:"Instance Store"})," volume. This is especially true for write intensive / mixed (50% writes 50% reads) workloads. For such use cases, if you have significant write requests, you\u2019ll need disks that can provide a large amount of IOPS in order to accommodate all background operations performed by HBase (compaction, WAL writes). Using disk optimized instances allows you to sustain high volumes of write operations either if HBase is performing compaction or other background operations on disks. Some example of instances that are recommended for such workloads are:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://aws.amazon.com/ec2/instance-types/i3/",children:"i3"})," / ",(0,o.jsx)(t.a,{href:"https://aws.amazon.com/ec2/instance-types/i3en/",children:"i3en"})," provide dense SSD storage for data-intensive workloads. They provide the best performance for write intensive workloads but can be prohibitive depending on the amount of storage you want to use. They are recommended if you want to achieve the best possible performance, and if you want to cache several data in memory."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://aws.amazon.com/ec2/instance-types/m5/",children:"m5d"})," / ",(0,o.jsx)(t.a,{href:"https://aws.amazon.com/ec2/instance-types/r5/",children:"r5d"})," / ",(0,o.jsx)(t.a,{href:"https://aws.amazon.com/ec2/instance-types/c5/",children:"c5d"})," all these families provide NVMe SSD disks to deliver high random I/O performance. They can be used in different ways to exploit HBase features. For example, r5d can be used in combination with HBase off heap caching to maintain a significant amount of data cached in a performant memory (instead of reading data from the disks). On the other side, c5d comes with a higher proportion of vCPU compared to the memory, so they can be a better match if you need to serve huge volumes of requests on a single region server."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["To decide the right instance size, it\u2019s important to understand how many regions you\u2019re going to serve on a single region server. As general rule however, for large HBase tables, it\u2019s recommended to choose an instance type that can provide at least 32GB of memory dedicated for the HBase services (HMaster and Region Servers). Please note that by default Amazon EMR split the available memory of an instance between the YARN Node Manager and the HBase Region Server. For a list of default memory settings, see ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hadoop-task-config.html#emr-hadoop-task-jvm",children:"Default values for task configuration settings"}),". You can always override the default EMR behavior using the EMR Configuration API. For more details see ",(0,o.jsx)(t.a,{href:"/aws-open-data-analytics/docs/bestpractices/Applications/Hbase/best_practice#hbase-heap-memory",children:"Modify Heap Memory"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"number-of-hbase-regions",children:"Number of HBase Regions"}),"\n",(0,o.jsxs)(t.p,{children:["As described in the ",(0,o.jsx)(t.a,{href:"https://hbase.apache.org/book.html#ops.capacity.regions.count",children:"HBase documentation"}),", you can use the following formula to compute the number of HBase regions that should be hosted on a single region server. You should note that this is gives more of guideline about number of regions, but you should investigate and experiment on your workload to tune the number of regions:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"(REGION_SERVER_MEM_SIZE * MEMSTORE_FRACTION) / (MEMSTORE_SIZE * NUM_COLUMN_FAMILIES)\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"REGION_SERVER_MEM_SIZE"})," Memory allocated for the Region Server, as defined by the parameter -Xmx in ",(0,o.jsx)(t.em,{children:"hbase-env.sh"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"MEMSTORE_FRACTION"})," Memstore memory fraction, defined by ",(0,o.jsx)(t.em,{children:"hbase.regionserver.global.memstore.size"})," (default 0.4)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"MEMSTORE_SIZE"})," Memstore flush size (default 128MB)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"NUM_COLUMN_FAMILIES"})," Number of column families defined for the table"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"For example for a Region Server configured with 32GB of Heap memory and hosting a table with a single column family with the default HBase settings, we'll have an ideal allocation of regions equals to:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"# Number Recommended Regions\n(32GB * 0.4) / (128MB * 1) = 100 \n"})}),"\n",(0,o.jsx)(t.p,{children:"As previosly mentioned, this is a recommended setting that you can use as a starting point. For example, is not unfrequent to have a region server with 3 / 4 times the recommended value. However, to avoid impacting the performance it\u2019s better that you\u2019re not extensively using these extra regions for write operations to avoid extensive GC operations that might degrade performance or in worst cases failures that will force a Region Server restart."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>i});var o=s(7294);const a={},n=o.createContext(a);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);