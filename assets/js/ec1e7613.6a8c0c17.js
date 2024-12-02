"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1594],{6008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=n(4848),a=n(8453);const i={sidebar_position:2,sidebar_label:"Best Practices"},r="Best Practice",o={id:"bestpractices/Applications/HBase/best_practice",title:"Best Practice",description:"The following section describes some general HBase tuning and best practice that can be applied both when using HDFS or Amazon S3 as storage layer for HBase.",source:"@site/docs/bestpractices/Applications/HBase/best_practice.md",sourceDirName:"bestpractices/Applications/HBase",slug:"/bestpractices/Applications/HBase/best_practice",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/HBase/best_practice",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bestpractices/Applications/HBase/best_practice.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Best Practices"},sidebar:"bestpractices",previous:{title:"Introduction",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/HBase/introduction"},next:{title:"Best Practices for HDFS",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/HBase/best_practice_hdfs"}},l={},h=[{value:"EMR Multi Master",id:"emr-multi-master",level:2},{value:"EMR Termination Protection",id:"emr-termination-protection",level:2},{value:"HBase RPC Listeners",id:"hbase-rpc-listeners",level:2},{value:"HBase Heap Memory",id:"hbase-heap-memory",level:2},{value:"HBase MultiWal Provider",id:"hbase-multiwal-provider",level:2},{value:"HBase OffHeap Caching",id:"hbase-offheap-caching",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"best-practice",children:"Best Practice"})}),"\n",(0,s.jsx)(t.p,{children:"The following section describes some general HBase tuning and best practice that can be applied both when using HDFS or Amazon S3 as storage layer for HBase."}),"\n",(0,s.jsx)(t.h2,{id:"emr-multi-master",children:"EMR Multi Master"}),"\n",(0,s.jsxs)(t.p,{children:["When working with HBase on Amazon EMR, it is good practice to enable the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-ha.html",children:"EMR Multi Master"})," feature that allows you to launch three EMR master nodes. This functionality allows the HBase cluster to tolerate impairments that might occur if a single master goes down."]}),"\n",(0,s.jsx)(t.p,{children:"Nevertheless, this functionality is highly recommended both when using HDFS or S3 as storage layer for your HBase cluster. Enabling this, allows you to serve HBase requests (both writes and reads) in case of a master failure. Please note that if you launch the EMR cluster with a single master and this node is terminated for any reason (e.g. human error, hardware impairment, etc.), it will not be possible to recover any data from the HDFS storage on the cluster as the HDFS metadata will be lost after the termination of the EMR master."}),"\n",(0,s.jsx)(t.h2,{id:"emr-termination-protection",children:"EMR Termination Protection"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html",children:"Using termination protection"})," in Amazon EMR is highly recommended both when using HDFS or Amazon S3 for your HBase cluster."]}),"\n",(0,s.jsxs)(t.p,{children:["Amazon EMR periodically checks the Apache Hadoop YARN status of nodes running on CORE and TASK nodes in a cluster. The health status is reported by the ",(0,s.jsx)(t.a,{href:"https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/NodeManager.html#Health_checker_service",children:"YARN NodeManager health checker service"}),". If a node reports an UNHEALTHY status, it will not be possible to allocate YARN containers to it until it becomes healthy again. A common reason for unhealthy nodes is that disk utilization goes above 90%. If the node stays in this state for more than 45 minutes and Termination Protection is disabled, the EMR service terminates the node and launch a fresh new one as replacement."]}),"\n",(0,s.jsx)(t.p,{children:"When a node is in an UNHEALTHY state, with the termination protection enabled the nodes will not be terminated and replaced by the EMR service. This prevents to lose HDFS data blocks in case the utilization of the disks of a CORE node goes above 90%, so preventing data integrity issues in HBase tables."}),"\n",(0,s.jsx)(t.h2,{id:"hbase-rpc-listeners",children:"HBase RPC Listeners"}),"\n",(0,s.jsxs)(t.p,{children:["One of the most important parameters to configure in your HBase cluster is the number of active RPC listeners defined per Region Server. Tuning the parameter ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"hbase.regionserver.handler.count"})})," (default: 30) can increase the number of requests that you can concurrently serve in each region server and so the overall throughput of your cluster. To modify the default number of RPC listeners you can use the following EMR configuration:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "Classification": "hbase-site",\n    "Properties": {\n      "hbase.regionserver.handler.count": "120"\n    }\n  }\n]\n'})}),"\n",(0,s.jsxs)(t.p,{children:["However, please be mindful that this parameter should be tuned accordingly to the average size of data stored or retrieved from your tables. As rule of thumb, you should increase this number when the payload of your data is lower than 100KB, while you should stick to the default, or decrease it when the payload size is ",(0,s.jsx)(t.code,{children:">= 1MB."})," For small payloads (",(0,s.jsx)(t.code,{children:"<= 1KB)"}),", you can push this value up to 4 times the number of vCpu available in your Region Servers."]}),"\n",(0,s.jsxs)(t.p,{children:["To determine the average payload of data stored in your tables, see ",(0,s.jsx)(t.a,{href:"./management#determine-average-row-size",children:"Determine average row size"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"hbase-heap-memory",children:"HBase Heap Memory"}),"\n",(0,s.jsxs)(t.p,{children:["On Amazon EMR, when you install HBase, the memory will be evenly re-partitioned between Hadoop YARN and HBase services. For a list of the default memory settings used per instance type see ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hadoop-task-config.html#emr-hadoop-task-jvm",children:"Task configuration"})," in the EMR documentation."]}),"\n",(0,s.jsxs)(t.p,{children:["However, when working with HBase it might be convenient to override the default parameters and increase the available memory for our HBase services. This might be required if we want to host a higher number of Regions per Region Server. To modify the default memory, you should modify the HBase environmental variables defined in the ",(0,s.jsx)(t.em,{children:"hbase-env"})," which defines the default heap memory available for each HBase service. The following list highlight the variables that should be modified by service:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"HBASE_MASTER_OPTS"})})," JVM options for the HBase master"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"HBASE_REGIONSERVER_OPTS"})})," JVM options for the HBase Region Servers"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"HBASE_THRIFT_OPTS"})})," JVM options for the HBase Thrift service"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"HBASE_REST_OPTS"})})," JVM options for the HBase REST service"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It\u2019s best practice to modify the memory of each component using its own dedicated variable, rather than using the more general ",(0,s.jsx)(t.strong,{children:"HBASE_OPTS"}),", which is used to apply common JVM options across all HBase services."]}),"\n",(0,s.jsxs)(t.p,{children:["To override the default memory we should specify the following java parameter in our environmental variable: ",(0,s.jsx)(t.code,{children:"-Xmx<size>[g|G|m|M|k|K]"}),". Please also make sure to add a self reference in the environmental variable to avoid loosing other parameters that are set in the script. Besides, if we modify the default HBase memory, we should also lower accordingly the memory specified for the YARN Node Manager service to avoid incurring in Out Of Memory errors."]}),"\n",(0,s.jsx)(t.p,{children:"Please note that either if you\u2019re just installing HBase, it might still be convenient to keep some memory reserved for YARN. This can be useful as some HBase utility runs on YARN (e.g. HBase export utility)."}),"\n",(0,s.jsx)(t.p,{children:"The example below highlights the configurations that should be modified in an EMR cluster while tuning the HBase heap memory. Please make sure that the sum of the YARN and HBase memory is not greater than the memory available on the node. Also make sure to keep at least 2GB of available memory for the Operating System and other internal components running on the node."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "Classification": "yarn-site",\n    "Properties": {\n      "yarn.scheduler.maximum-allocation-mb": "MAX_MEMORY_BYTES",\n      "yarn.nodemanager.resource.memory-mb": "MAX_MEMORY_BYTES"\n    }\n  },\n  {\n    "Classification": "hbase-env",\n    "Configurations": [\n      {\n        "Classification": "export",\n        "Properties": {\n          "HBASE_MASTER_OPTS": "\\"$HBASE_MASTER_OPTS -Xmx30g\\"",\n          "HBASE_REGIONSERVER_OPTS": "\\"$HBASE_REGIONSERVER_OPTS -Xmx30g\\""\n        }\n      }\n    ],\n    "Properties": {}\n  }\n]\n'})}),"\n",(0,s.jsx)(t.h2,{id:"hbase-multiwal-provider",children:"HBase MultiWal Provider"}),"\n",(0,s.jsxs)(t.p,{children:["By default, HBase uses a single ",(0,s.jsx)(t.a,{href:"https://hbase.apache.org/book.html#wal",children:"Write Ahead Log"})," file (WAL) per Region Server to persist mutate operations that are performed against Regions hosted on the node. This implementation can be a bottleneck as WALs are stored on the HDFS and each operation is performed sequentially against the same file."]}),"\n",(0,s.jsx)(t.p,{children:"In write intensive clusters, you might increase the HBase throughput by adopting a multiwal strategy. In this scenario is recommended to have multiple disks attached to the node to get the most out of this feature. This configuration can be enabled specifying the following properties while launching an EMR cluster:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "Classification": "hbase-site",\n    "Properties": {\n      "hbase.wal.provider": "multiwal",\n      "hbase.wal.regiongrouping.numgroups": "2"\n    }\n  }\n]\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The parameter ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"hbase.wal.regiongrouping.numgroups"})})," determines the number of WALs that will be created per Region Server. By default, this parameter is set to two, but you can tune this parameter accordingly to the number of disks attached to the node for better performance."]}),"\n",(0,s.jsx)(t.h2,{id:"hbase-offheap-caching",children:"HBase OffHeap Caching"}),"\n",(0,s.jsx)(t.p,{children:"The following example, shows how to enable OffHeap memory caching on HBase. This configuration, can be used both when using Amazon S3 or HDFS as storage layer. The example below sets an offheap memory of 5GB while the bucket cache allocated for this memory will be 4GB."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "Classification": "hbase-env",\n    "Properties": {},\n    "Configurations": [\n      {\n        "Classification": "export",\n        "Properties": {\n          "HBASE_OFFHEAPSIZE": "5G"\n        },\n        "Configurations": []\n      }\n    ]\n  },\n  {\n    "Classification": "hbase-site",\n    "Properties": {\n      "hbase.bucketcache.size": "4096",\n      "hbase.bucketcache.ioengine": "offheap"\n    }\n  }\n]\n'})}),"\n",(0,s.jsx)(t.p,{children:"In order to use the configured cache, make sure to enable the following configurations in the tables you want to cache. For example, from the HBase shell:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# creating new table t with column family info0\nhbase> create 't', {NAME => 'info0', CONFIGURATION => {CACHE_DATA_IN_L1 => 'true'}}\n\n# modify existing table t with column family info0\nhbase> alter 't', {NAME => 'info0', CONFIGURATION => {CACHE_DATA_IN_L1 => 'true'}}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);