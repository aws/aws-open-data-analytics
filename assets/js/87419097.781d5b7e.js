"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4610],{4623:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=n(4848),a=n(8453);const o={sidebar_position:2,sidebar_label:"Best Practices"},i="4.1 - Managed Scaling",r={id:"bestpractices/Features/Managed Scaling/best_practices",title:"4.1 - Managed Scaling",description:"Managed scaling lets you automatically increase or decrease the number of instances or units in your cluster based on workload. Amazon EMR continuously evaluates cluster metrics to make scaling decisions that optimize your clusters for cost and speed. Managed scaling is available for clusters composed of either instance groups or instance fleets.",source:"@site/docs/bestpractices/4 - Features/Managed Scaling/best_practices.md",sourceDirName:"bestpractices/4 - Features/Managed Scaling",slug:"/bestpractices/Features/Managed Scaling/best_practices",permalink:"/aws-emr-best-practices/docs/bestpractices/Features/Managed Scaling/best_practices",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bestpractices/4 - Features/Managed Scaling/best_practices.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Best Practices"},sidebar:"bestpractices",previous:{title:"Best Practices",permalink:"/aws-emr-best-practices/docs/bestpractices/Features/EMRFS/best_practices"},next:{title:"Best Practices",permalink:"/aws-emr-best-practices/docs/bestpractices/Features/Spot Usage/best_practices"}},c={},d=[{value:"BP 4.1.1 Keep core nodes constant and scale with only task nodes",id:"bp-411-keep-core-nodes-constant-and-scale-with-only-task-nodes",level:2},{value:"BP 4.1.2 Monitor Managed Scaling with Cloudwatch Metrics",id:"bp-412-monitor-managed-scaling-with-cloudwatch-metrics",level:2},{value:"BP 4.1.3 Consider adjusting YARN decommissioning timeouts depending on your workload",id:"bp-413-consider-adjusting-yarn-decommissioning-timeouts-depending-on-your-workload",level:2},{value:"BP 4.1.5 EMR Managed Scaling compared to Custom Automatic Scaling",id:"bp-415-emr-managed-scaling-compared-to-custom-automatic-scaling",level:2},{value:"BP 4.1.6 Configure Spark History Server (SHS) custom executor log URL to point to Job History Server (JHS) Directly",id:"bp-416-configure-spark-history-server-shs-custom-executor-log-url-to-point-to-job-history-server-jhs-directly",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"41---managed-scaling",children:"4.1 - Managed Scaling"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-scaling.html",children:"Managed scaling"})," lets you automatically increase or decrease the number of instances or units in your cluster based on workload. Amazon EMR continuously evaluates cluster metrics to make scaling decisions that optimize your clusters for cost and speed. Managed scaling is available for clusters composed of either instance groups or instance fleets."]}),"\n",(0,t.jsx)(s.h2,{id:"bp-411-keep-core-nodes-constant-and-scale-with-only-task-nodes",children:"BP 4.1.1 Keep core nodes constant and scale with only task nodes"}),"\n",(0,t.jsx)(s.p,{children:"Scaling with only task nodes improves the time for nodes to scale in and out because task nodes do not coordinate storage as part of HDFS. During scale up, task nodes do not need to install data node daemons and during scale down, task nodes do not need rebalance HDFS blocks. Improvement in the time it takes to scale in and out improves performance and reduces cost. When scaling down with core nodes, you also risk saturating the remaining nodes' disk volume during HDFS rebalance. If the nodes disk utilization exceeds 90%, it\u2019ll mark the node as unhealthy, making it unusable by YARN."}),"\n",(0,t.jsx)(s.p,{children:"In order to only scale with task nodes, you keep the number of core nodes constant and right size your core node EBS volumes for your HDFS usage. Remember to consider the HDFS replication factor which is configured via dfs.replication in hdfs-site.xml. It is recommended that at a minimum, you keep 2 core nodes and set dfs.replication=2."}),"\n",(0,t.jsx)(s.p,{children:"Below is a managed scaling configuration example where the cluster will scale only on task nodes. In this example, the minimum nodes is 25, maximum 100. Of the 25 minimum, they will be all on-demand and core nodes. When the cluster needs to scale up, the remaining 75 will be task nodes on spot."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"BP - 1",src:n(8284).A+"",width:"1608",height:"386"})}),"\n",(0,t.jsx)(s.h2,{id:"bp-412-monitor-managed-scaling-with-cloudwatch-metrics",children:"BP 4.1.2 Monitor Managed Scaling with Cloudwatch Metrics"}),"\n",(0,t.jsx)(s.p,{children:"You can monitor your managed scaling cluster with CloudWatch metrics. This is useful if you want to better understand how your cluster is resizing to the change in job load/usage."}),"\n",(0,t.jsx)(s.p,{children:"Lets looks at an example:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"!BP - 2",src:n(3182).A+"",width:"2643",height:"320"})}),"\n",(0,t.jsxs)(s.p,{children:["At 18:25, ",(0,t.jsx)(s.code,{children:"YARNMemoryAvailablePercentage"})," starts at 100%. This means that no jobs are running. At 18:27 a job starts and we see ",(0,t.jsx)(s.code,{children:"YARNMemoryAvailablePercentage"})," begin to drop, reaching 0% at 18:29. This triggers managed scaling to start a resize request - represented by the increase in the metric ",(0,t.jsx)(s.code,{children:"TotalNodesRequested"}),". After 5-6 mins, at 18:35 the nodes finish provisioning and are considered ",(0,t.jsx)(s.code,{children:"RUNNING"}),". We see an increase in the metric, ",(0,t.jsx)(s.code,{children:"TotalNodesRunning"}),". Around the same time, we see ",(0,t.jsx)(s.code,{children:"YARNMemoryAvailablePercentage"})," begin increasing back to 100%."]}),"\n",(0,t.jsxs)(s.p,{children:["For a full list of metrics and description of each, see\n",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/managed-scaling-metrics.html",children:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/managed-scaling-metrics.html"})]}),"\n",(0,t.jsx)(s.h2,{id:"bp-413-consider-adjusting-yarn-decommissioning-timeouts-depending-on-your-workload",children:"BP 4.1.3 Consider adjusting YARN decommissioning timeouts depending on your workload"}),"\n",(0,t.jsx)(s.p,{children:"There are two decommissioning timeouts that are important in managed scaling:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsxs)(s.em,{children:[(0,t.jsx)(s.code,{children:"yarn.resourcemanager.nodemanager-graceful-decommission-timeout-secs"}),":"]})," This is the maximal time to wait for running containers and applications to complete before transition a ",(0,t.jsx)(s.code,{children:"DECOMMISSIONING"})," node into ",(0,t.jsx)(s.code,{children:"DECOMMISSIONED"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsxs)(s.em,{children:[(0,t.jsx)(s.code,{children:"spark.blacklist.decommissioning.timeout"}),":"]})," This is the maximal time that Spark does not schedule new tasks on executors running on that node. Tasks already running are allowed to complete."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["When managed scaling triggers a scale down, YARN will put nodes it wants to decomission in a ",(0,t.jsx)(s.code,{children:"DECOMMISSIONING"})," state. Spark will detect this and add these nodes to a \u201cblack list\u201d (",(0,t.jsx)(s.em,{children:"AWS acknowledges the use of non-inclusive language in this codebase and will work with the Spark community to update"}),"). In this state, Spark will not assign any new tasks to the node and once all tasks are completed, YARN will finish decommissioning the node. If the task runs longer than ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.code,{children:"yarn.resourcemanager.nodemanager-graceful-decommission-timeout-secs"})}),", the node is force-terminated and the task will be reassigned to another node."]}),"\n",(0,t.jsxs)(s.p,{children:["In certain scale down scenarios where you have long running tasks, many nodes can end up in this state where they are ",(0,t.jsx)(s.code,{children:"DECOMMISSIONING"})," and ",(0,t.jsx)(s.code,{children:"blacklisted"})," because of ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.code,{children:"spark.blacklist.decommissioning.timeout."})})," You may observe that new jobs run slower because it cannot assign tasks to all nodes in the cluster."]}),"\n",(0,t.jsxs)(s.p,{children:["To mitigate this, you can lower ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.code,{children:"spark.blacklist.decommissioning.timeout"})})," to make the node available for other pending containers to continue task processing. This can improve job run times. However, please take the below into consideration:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If a task is assigned to this node, and YARN transitions from ",(0,t.jsx)(s.code,{children:"DECOMMISSIONING"})," into ",(0,t.jsx)(s.code,{children:"DECOMMISSIONED"}),", the task will fail and will need to be reassigned to another node."]}),"\n",(0,t.jsx)(s.li,{children:"Spark blacklist also protects from bad nodes in the cluster, e.g., faulty hardware leading to high task failure rate. Lowering the blacklist timeout can increase task failure rate since tasks will continue to be assigned to these nodes."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Nodes can be transitioned from ",(0,t.jsx)(s.code,{children:"DECOMMISSIONING"})," to ",(0,t.jsx)(s.code,{children:"RUNNING"})," due to a scale up request. In this scenario, tasks will not fail and with a lower blacklist timeout, pending tasks can continuously be assigned to the node."]}),"\n",(0,t.jsxs)(s.p,{children:["With ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.code,{children:"yarn.resourcemanager.nodemanager-graceful-decommission-timeout-secs"})}),", consider increasing this from the default of 1hr to the length of your longest running task. This is to ensure that YARN does not force-terminate the node while the task is running, causing it to re-run on another node. The cost associated with rerunning the long running task is generally higher than keeping the node running to ensure it's completed."]}),"\n",(0,t.jsx)(s.p,{children:"For more information, see:"}),"\n",(0,t.jsxs)(s.p,{children:["(",(0,t.jsx)(s.a,{href:"https://aws.amazon.com/blogs/big-data/spark-enhancements-for-elasticity-and-resiliency-on-amazon-emr/",children:"https://aws.amazon.com/blogs/big-data/spark-enhancements-for-elasticity-and-resiliency-on-amazon-emr/"}),")"]}),"\n",(0,t.jsxs)(s.p,{children:["(",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-troubleshoot-error-resource-3.html",children:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-troubleshoot-error-resource-3.html"}),")"]}),"\n",(0,t.jsxs)(s.p,{children:["(",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-configure.html#spark-decommissioning",children:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-configure.html#spark-decommissioning"}),")"]}),"\n",(0,t.jsx)(s.h2,{id:"bp-415-emr-managed-scaling-compared-to-custom-automatic-scaling",children:"BP 4.1.5 EMR Managed Scaling compared to Custom Automatic Scaling"}),"\n",(0,t.jsx)(s.p,{children:"The following link highlights the key differences between EMR managed scaling vs. custom automatic scaling:"}),"\n",(0,t.jsxs)(s.p,{children:["(",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-scale-on-demand.html",children:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-scale-on-demand.html"}),")"]}),"\n",(0,t.jsx)(s.p,{children:"In general, we recommend using EMR managed scaling since the metric evaluation is every 5-10 seconds. This means your EMR cluster will adjust quicker to the change in the required cluster resources. In addition, EMR managed scaling also supports instance fleets and the the scaling policy is simpler to configure because EMR managed scaling only requires min and max amounts for purchasing options (On-Demand/Spot) and node type (core/task)."}),"\n",(0,t.jsx)(s.p,{children:"Custom automatic scaling should be considered if you want autoscaling outside of YARN applications or if you want full control over your scaling policies (e.g., evaluation period, cool down, number of nodes)"}),"\n",(0,t.jsx)(s.h2,{id:"bp-416-configure-spark-history-server-shs-custom-executor-log-url-to-point-to-job-history-server-jhs-directly",children:"BP 4.1.6 Configure Spark History Server (SHS) custom executor log URL to point to Job History Server (JHS) Directly"}),"\n",(0,t.jsx)(s.p,{children:"When you use SHS to access application container logs, YARN ResourceManager relies on the NodeManager that the jobs' Application Master (AM) ran on, to redirect to the JHS. The JHS is what hosts the container logs. A job's executor logs cannot be accessed if the AM ran on a node that\u2019s been decommissioned due to managed scaling or spot."}),"\n",(0,t.jsx)(s.p,{children:"A solution to this is pointing SHS to the JHS directly, instead of letting node manager redirect."}),"\n",(0,t.jsxs)(s.p,{children:["Spark 3.0 introduced ",(0,t.jsx)(s.em,{children:"spark.history.custom.executor.log.url"}),", which allows you to specify a custom Spark executor log url."]}),"\n",(0,t.jsxs)(s.p,{children:["You can configure ",(0,t.jsx)(s.em,{children:"spark.history.custom.executor.log.url"})," as below to point to JHS directly:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"{{HTTP_SCHEME}}<JHS_HOST>:<JHS_PORT>/jobhistory/logs/{{NM_HOST}}:{{NM_PORT}}/{{CONTAINER_ID}}/{{CONTAINER_ID}}/{{USER}}/{{FILE_NAME}}?start=-4096\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Replace ",(0,t.jsx)(s.code,{children:"JHS_HOST"})," and ",(0,t.jsx)(s.code,{children:"JHS_PORT"})," with actual values. ",(0,t.jsx)(s.code,{children:"JHS_HOST"})," is the EMR master node."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8284:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/bp-1-a8203d9c7cde726ad051324227a9c54d.png"},3182:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/bp-3-f95ce91f3fced073bd79cf09a697908c.png"},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var t=n(6540);const a={},o=t.createContext(a);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);