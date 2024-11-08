"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[962],{4738:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=s(4848),o=s(8453);const a={sidebar_position:2,sidebar_label:"Best Practices"},i="4.2 - Spot Usage",r={id:"bestpractices/Features/Spot Usage/best_practices",title:"4.2 - Spot Usage",description:"BP 4.2.1 When to use spot vs. on demand",source:"@site/docs/bestpractices/4 - Features/Spot Usage/best_practices.md",sourceDirName:"bestpractices/4 - Features/Spot Usage",slug:"/bestpractices/Features/Spot Usage/best_practices",permalink:"/aws-emr-best-practices/docs/bestpractices/Features/Spot Usage/best_practices",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bestpractices/4 - Features/Spot Usage/best_practices.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Best Practices"},sidebar:"bestpractices",previous:{title:"Troubleshooting",permalink:"/aws-emr-best-practices/docs/bestpractices/Features/Managed Scaling/troubleshooting"},next:{title:"Introduction",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/Hadoop/introduction"}},l={},c=[{value:"BP 4.2.1 When to use spot vs. on demand",id:"bp-421-when-to-use-spot-vs-on-demand",level:2},{value:"BP 4.2.1 Use Instancefleets when using Spot Instances",id:"bp-421-use-instancefleets-when-using-spot-instances",level:2},{value:"BP 4.2.2 Ensure Application Masters only run on an On Demand Node",id:"bp-422-ensure-application-masters-only-run-on-an-on-demand-node",level:2},{value:"BP 4.2.3 Allow application masters (AM) to run on all nodes",id:"bp-423-allow-application-masters-am-to-run-on-all-nodes",level:2},{value:"BP 4.2.4 Reserve core nodes for only application masters (am)",id:"bp-424-reserve-core-nodes-for-only-application-masters-am",level:2},{value:"BP 4.2.5 Reduce Spot interruptions by setting purchase Option to &quot;Use on-demand as max price&quot;",id:"bp-425-reduce-spot-interruptions-by-setting-purchase-option-to-use-on-demand-as-max-price",level:2},{value:"BP 4.2.6 Reduce the impact of Spot interruptions",id:"bp-426-reduce-the-impact-of-spot-interruptions",level:2},{value:"BP 4.2.7 Adjust Spark task size to complete within 2 minutes",id:"bp-427-adjust-spark-task-size-to-complete-within-2-minutes",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"42---spot-usage",children:"4.2 - Spot Usage"})}),"\n",(0,t.jsx)(n.h2,{id:"bp-421-when-to-use-spot-vs-on-demand",children:"BP 4.2.1 When to use spot vs. on demand"}),"\n",(0,t.jsx)(n.p,{children:"Spot Instances provide a great way to help reduce costs. However, there are certain scenarios where you should consider on demand because there's always a chance that a Spot interruption can happen. The considerations are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use Spot for workloads where they can be interrupted and resumed (interruption rates are extremely low), or workloads that can exceed an SLA"}),"\n",(0,t.jsx)(n.li,{children:"Use Spot for testing and development workloads or when testing testing new applications."}),"\n",(0,t.jsx)(n.li,{children:"Avoid Spot if your workload requires predictable completion time or has service level agreement (SLA) requirements"}),"\n",(0,t.jsx)(n.li,{children:"Avoid Spot if your workload has 0 fault tolerance or when recomputing tasks are expensive"}),"\n",(0,t.jsx)(n.li,{children:"Use Instance Fleet with allocation strategy while using Spot so that you can diversify across many different instances. The Spot capacity pool can be unpredictable, so diversifying with as many instances that meets your requirements can help increase the likelihood of securing Spot instances which in turn, reduces cost."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"bp-421-use-instancefleets-when-using-spot-instances",children:"BP 4.2.1 Use Instancefleets when using Spot Instances"}),"\n",(0,t.jsx)(n.p,{children:"Instance Fleets provides clusters with flexibility - instead of relying on a single instance type to reach your target capacity, you can specify up to 30 different types and families. This is a best practice when using Spot because EMR will automatically provision instances from the most-available Spot capacity pools when allocation strategy is enabled. Because your Spot Instance capacity is sourced from pools with optimal capacity, this decreases the possibility that your Spot Instances will be reclaimed. A good rule of thumb is to be flexible across at least 10 instance types for each workload. In addition, make sure that all Availability Zones are configured for use in your VPC and selected for your workload. An EMR cluster will only be provisioned in a single AZ but will look across all for the initial provisioning."}),"\n",(0,t.jsx)(n.p,{children:"When using Instance Fleets, it is recommended you diversify across instances and family. For more details, see:"}),"\n",(0,t.jsxs)(n.p,{children:["(",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-flexibility.html",children:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-flexibility.html"}),")"]}),"\n",(0,t.jsx)(n.h2,{id:"bp-422-ensure-application-masters-only-run-on-an-on-demand-node",children:"BP 4.2.2 Ensure Application Masters only run on an On Demand Node"}),"\n",(0,t.jsx)(n.p,{children:"When a job is submitted to EMR Prior to the 5.x release, the Application Master (AM) can run on any of the nodes*. The AM is is the main container requesting, launching and monitoring application specific resources. Each job launches a single AM and if the AM is assigned to a Spot node, and that Spot node is interrupted, your job will fail."}),"\n",(0,t.jsx)(n.p,{children:"Therefore, it's important to ensure the AM is as resilient as possible. Assuming you are running a mixed cluster of On Demand and Spot, by placing AM's on On Demand nodes, you'll ensure AM's do not fail due to a Spot interruption."}),"\n",(0,t.jsxs)(n.p,{children:["The following uses ",(0,t.jsx)(n.code,{children:"yarn.nodemanager.node-labels.provider.script.path"})," to run a script that sets node label to the market type - On Demand or Spot. ",(0,t.jsx)(n.code,{children:"yarn-site"}),' is also updated so that application masters are only assigned to the "on_demand" label. Finally, the cluster is updated to include the new node label.']}),"\n",(0,t.jsx)(n.p,{children:"This is a good option when you run a mix of On Demand and Spot. You can enable this with the following steps:"}),"\n",(0,t.jsxs)(n.p,{children:["1. Save ",(0,t.jsx)(n.code,{children:"getNodeLabels_bootstrap.sh"})," and ",(0,t.jsx)(n.code,{children:"getNodeLabels.py"})," in S3 and run ",(0,t.jsx)(n.code,{children:"getNodeLabels_bootstrap.sh"})," as an EMR bootstrap action"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"getNodeLabels_bootstrap.sh"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"#!/bin/bash\naws s3 cp s3://<bucket>/getNodeLabels.py /home/hadoop\nchmod +x /home/hadoop/getNodeLabels.py\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This script will copy ",(0,t.jsx)(n.code,{children:"getNodeLabels.py"})," onto each node which is used by YARN to set ",(0,t.jsx)(n.code,{children:"NODE_PARTITION"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"getNodeLabels.py"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"#!/usr/bin/python3\nimport json\nk='/mnt/var/lib/info/extraInstanceData.json'\nwith open(k) as f:\n    response = json.load(f)\n    #print ((response['instanceRole'],response['marketType']))\n    if (response['instanceRole'] in ['core','task'] and response['marketType']=='on_demand'):\n       print (f\"NODE_PARTITION:{response['marketType'].upper()}\")\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This script is run every time a node is provisioned and sets ",(0,t.jsx)(n.code,{children:"NODE_PARTITION"})," to ",(0,t.jsx)(n.code,{children:"on_demand"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["2. Set ",(0,t.jsx)(n.code,{children:"yarn-site"})," classification to schedule AMs on ",(0,t.jsx)(n.code,{children:"ON_DEMAND"})," nodes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[\n   {\n      "classification":"yarn-site",\n      "Properties":{\n         "yarn.nodemanager.node-labels.provider":"script",\n         "yarn.nodemanager.node-labels.provider.script.path":"/home/hadoop/getNodeLabels.py",\n         "yarn.node-labels.enabled":"true",\n         "yarn.node-labels.am.default-node-label-expression":"ON_DEMAND",\n         "yarn.nodemanager.node-labels.provider.configured-node-partition":"ON_DEMAND,SPOT"\n      }\n   },\n   {\n      "classification":"capacity-scheduler",\n      "Properties":{\n         "yarn.scheduler.capacity.root.accessible-node-labels.ON_DEMAND.capacity":"100",\n         "yarn.scheduler.capacity.root.default.accessible-node-labels.ON_DEMAND.capacity":"100"\n      }\n   }   \n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"3. Add EMR Step"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'#!/bin/bash\nsudo -u yarn yarn rmadmin -addToClusterNodeLabels "SPOT(exclusive=false),ON_DEMAND(exclusive=false)"\n'})}),"\n",(0,t.jsx)(n.p,{children:"This Step should be the first step on the EMR cluster, and adds the new node labels."}),"\n",(0,t.jsx)(n.p,{children:"Once your cluster is provisioned, AM's will only run on On Demand nodes. Other non AM containers will run on all nodes."}),"\n",(0,t.jsx)(n.p,{children:"* EMR 5.19 and later uses the node label feature to assign AMs on core nodes only. Beginning with Amazon EMR 6.x release series, the YARN node labels feature is disabled by default. The application master processes can run on both core and task nodes by default."}),"\n",(0,t.jsx)(n.h2,{id:"bp-423-allow-application-masters-am-to-run-on-all-nodes",children:"BP 4.2.3 Allow application masters (AM) to run on all nodes"}),"\n",(0,t.jsx)(n.p,{children:"With EMR 5.x, AM only run on core nodes. Because Spot Instances are often used to run task nodes, it prevents applications from failing in case an AM is assigned to a Spot node."}),"\n",(0,t.jsx)(n.p,{children:"As a result of this, in scenarios where applications are occupying the full core node capacity, AM's will be in a PENDING state since they can only run on core nodes. The application will have to wait for capacity to be available on the core nodes even if there's capacity on the task  nodes."}),"\n",(0,t.jsx)(n.p,{children:"Allowing AM's to run on all nodes is a good option if you are not using Spot, or run a small number of core nodes and do not want your cluster to be limited by Core capacity. You can disable this behavior with the bootstrap action below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'#!/bin/bash \necho "backup original init.pp"\nsudo cp cp /var/aws/emr/bigtop-deploy/puppet/modules/hadoop/manifests/init.pp /tmp/\necho "replacing node label check"\nsudo sed -i \'/add-to-cluster-node-labels.*/,+5d\' /var/aws/emr/bigtop-deploy/puppet/modules/hadoop/manifests/init.pp\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Beginning with Amazon EMR 6.x release series, the YARN node labels feature is disabled by default. The AM processes can run on both core and task nodes by default. You can enable the YARN node labels feature by configuring following properties:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"yarn.node-labels.enabled: true\nyarn.node-labels.am.default-node-label-expression: 'CORE'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When you allow AM's to run on all nodes and are using managed scaling, consider increasing ",(0,t.jsx)(n.code,{children:"yarn.resourcemanager.nodemanager-graceful-decommission-timeout-secs"})," so AM's are not automatically terminated after the 1hr timeout in the event of a scale down. See BP 4.1.3 for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"bp-424-reserve-core-nodes-for-only-application-masters-am",children:"BP 4.2.4 Reserve core nodes for only application masters (am)"}),"\n",(0,t.jsxs)(n.p,{children:["This is not necessarily related to Spot, but An alternative to BP 4.2.2 is to reserve core nodes for only application masters/spark drivers. This means tasks spawned from executors or AMs will only run on the task nodes. The approach keeps the \u201cCORE\u201d label for core nodes and specifies it as ",(0,t.jsx)(n.code,{children:"exclusive=true"}),". This means that containers will only be allocated to CORE nodes when it matches the node partition during job submission. By default, EMR will set AM=Core and as long as users are not specifying node label = core, all containers will run on task."]}),"\n",(0,t.jsx)(n.p,{children:"Add EMR step during EMR provisioning:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'#!/bin/bash\n#Change core label from exclusive=false to exclusive=true.\nsudo -u yarn yarn rmadmin -removeFromClusterNodeLabels "CORE"\nsudo -u yarn yarn rmadmin -addToClusterNodeLabels "CORE(exclusive=true)"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Applications can still be waiting for resources if the # of jobs you\u2019re submitting exceeds the available space on your core nodes. However, this is less likely to occur now that tasks cant be assigned to core. Another other option to consider is allowing AM to run on all nodes but OD, but we do not recommend having AM run on the task group generally."}),"\n",(0,t.jsx)(n.h2,{id:"bp-425-reduce-spot-interruptions-by-setting-purchase-option-to-use-on-demand-as-max-price",children:'BP 4.2.5 Reduce Spot interruptions by setting purchase Option to "Use on-demand as max price"'}),"\n",(0,t.jsx)(n.p,{children:'By setting the spot purchase option to "use on-demand as max price", your Spot nodes will only be interrupted when EC2 takes back Spot capacity and not because of someone outbidding your Spot price.'}),"\n",(0,t.jsx)(n.h2,{id:"bp-426-reduce-the-impact-of-spot-interruptions",children:"BP 4.2.6 Reduce the impact of Spot interruptions"}),"\n",(0,t.jsx)(n.p,{children:"There are a few strategies to consider when using Spot Instances that will help you take advantage of Spot pricing while still getting capacity:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://aws.github.io/aws-emr-best-practices/cost_optimization/best_practices/#bp-19-mix-on-demand-and-spot-instances",children:"Mix On Demand nodes with Spot"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://aws.github.io/aws-emr-best-practices/reliability/best_practices/#bp-25-use-on-demand-for-core-nodes-and-spot-for-task",children:"Use On Demand for core nodes and Spot for task"})}),"\n",(0,t.jsx)(n.li,{children:"Reduce provisioning timeout and switch to On Demand - When using Instance Fleets, EMR allows you to set a timeout duration for getting Spot capacity. Once the duration is hit, you can choose to terminate the cluster or fall back to on demand. The default value is 60min but consider lowering this quickly fall back to on demand when spot is not available"}),"\n",(0,t.jsx)(n.li,{children:"Checkpoint often - This allows you to retry from a certain part of your pipeline if you ever lose too many Spot nodes"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"bp-427-adjust-spark-task-size-to-complete-within-2-minutes",children:"BP 4.2.7 Adjust Spark task size to complete within 2 minutes"}),"\n",(0,t.jsxs)(n.p,{children:["Consider reducing spark task sizes to minimize the impact of a Spot interruption. Smaller task sizes complete faster. These tasks will be less impacted by spot because the amount of time to recompute the failed task is less. There are a number of factors that impact the # of spark tasks and their run time such as ",(0,t.jsx)(n.code,{children:"spark.sql.files.maxPartitionBytes"}),", ",(0,t.jsx)(n.code,{children:"spark.default.parallelism"}),", # of objects in S3, or are the objects can be split. See Spark best practices section on how to adjust task run times."]}),"\n",(0,t.jsx)(n.p,{children:"When using Spot, the optimal task run time is less than 2 minutes. This is because EC2 Spot instances receive a two-minute warning when these instances are about to be reclaimed by Amazon EC2 which means most tasks will be able to finish before the spot node is reclaimed. In addition, EMR does not assign new tasks to nodes that have received the 2 minute warning."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(6540);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);