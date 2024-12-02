"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9697],{8882:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=s(4848),t=s(8453);const o={},i="YARN Scaling with custom labels",r={id:"bestpractices/Applications/Hadoop/yarn_labels_scaling",title:"YARN Scaling with custom labels",description:"Overview",source:"@site/docs/bestpractices/Applications/Hadoop/yarn_labels_scaling.md",sourceDirName:"bestpractices/Applications/Hadoop",slug:"/bestpractices/Applications/Hadoop/yarn_labels_scaling",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/Hadoop/yarn_labels_scaling",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bestpractices/Applications/Hadoop/yarn_labels_scaling.md",tags:[],version:"current",frontMatter:{},sidebar:"bestpractices",previous:{title:"YARN Docker with GPU",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/Hadoop/yarn_docker_gpu"},next:{title:"YARN Node Resilience with External Health Scripts",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/Hadoop/yarn_node_ resilience"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Commands / Examples",id:"commands--examples",level:2},{value:"Hadoop YARN",id:"hadoop-yarn",level:3},{value:"List Node Labels",id:"list-node-labels",level:4},{value:"List Cluster Nodes Labels",id:"list-cluster-nodes-labels",level:4},{value:"Create Node Label",id:"create-node-label",level:4},{value:"Delete Node Label",id:"delete-node-label",level:4},{value:"Apache Spark",id:"apache-spark",level:3},{value:"Monitoring",id:"monitoring",level:2},{value:"Resources",id:"resources",level:2},{value:"References",id:"references",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"yarn-scaling-with-custom-labels",children:"YARN Scaling with custom labels"})}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["This document offers a comprehensive guide for deploying an Amazon EMR cluster capable of dynamically adjusting its capacity using ",(0,a.jsx)(n.a,{href:"https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/NodeLabel.html",children:"YARN Node Labels"})," to scale specific Instance Groups based on pending container requests."]}),"\n",(0,a.jsx)(n.p,{children:"In scenarios where a multitenant cluster accommodates diverse applications with distinct hardware requirements (e.g. memory vs compute intensive jobs), selective scaling of the cluster can enhance throughput and minimize resource underutilization."}),"\n",(0,a.jsxs)(n.p,{children:["To achieve this, we can use a custom agent deployed on the EMR primary node to gather additional metrics and publish them on CloudWatch. These metrics can serve as input for the ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html",children:"EMR Custom Autoscale"})," functionality where we can define precise scaling logic for the nodes of our cluster."]}),"\n",(0,a.jsxs)(n.p,{children:["In the provided example, we demonstrate launching an EMR cluster with two distinct Instance Groups: one optimized for COMPUTE tasks (using c5 instances) and another tailored for MEMORY intensive workloads (using r5 instances). Each Instance Group is tagged with a custom ",(0,a.jsx)(n.a,{href:"https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/NodeLabel.html",children:"YARN Node Label"})," defined at cluster launch. EMR's Instance Group configurations accommodate such labeling, using the following YARN configurations:"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"})," ",(0,a.jsx)(n.em,{children:"Custom YARN labels defined in the configurations should be created manually while launching the cluster. You can use an EMR Step to automate this process as shown in the CloudFormation example"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "Classification": "yarn-site",\n    "Properties": {\n      "yarn.nodemanager.node-labels.provider": "config",\n      "yarn.nodemanager.node-labels.provider.configured-node-partition": "COMPUTE_OPTIMIZED"\n    }\n  }\n]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Subsequently, custom YARN metrics are streamed to CloudWatch to serve as triggers for cluster scaling. In our demonstration, we track two distinct metrics on CloudWatch: pending vCores and memory utilization across each cluster partition of the cluster identified by a YARN Label. These metrics are acquired using the ",(0,a.jsx)(n.a,{href:"https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/ResourceManagerRest.html",children:"YARN Resource Manager Scheduler API"}),", and aggregated across all YARN queues (if defined in the yarn configurations). For a practical implementation, refer to the provided ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(6684).A+"",children:"Metric Collector Script"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Finally, scaling policies are defined using CloudWatch triggers available in EMR Custom Autoscale. In our example, we adopt two distinct scaling strategies for each Instance Group: memory-optimized scaling, based on pending memory, and compute-optimized scaling, reliant on pending vCore."}),"\n",(0,a.jsx)(n.p,{children:"Below is an example of a scale-out policy defined for the COMPUTE Instance Group. This policy triggers a scaling action to augment the cluster's capacity by 20% if the count of pending vCores exceeds 10, with a cooldown period of 300 seconds between consecutive scaling actions."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "Name": "COMPUTE_OPTIMIZED_SCALE_OUT",\n  "Description": "Scale-Out on pending vCores",\n  "Action": {\n    "SimpleScalingPolicyConfiguration": {\n      "AdjustmentType": "PERCENT_CHANGE_IN_CAPACITY",\n      "ScalingAdjustment": 20,\n      "CoolDown": 300\n    }\n  },\n  "Trigger": {\n    "CloudWatchAlarmDefinition": {\n      "ComparisonOperator": "GREATER_THAN_OR_EQUAL",\n      "EvaluationPeriods": 1,\n      "MetricName": "COMPUTE_OPTIMIZED.PendingVCores",\n      "Namespace": "AWS/ElasticMapReduce",\n      "Period": 120,\n      "Statistic": "AVERAGE",\n      "Threshold": 10,\n      "Unit": "COUNT"\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["For further details on configurations and parameters, consult ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html#emr-scaling-rules",children:"Understanding automatic scaling rules"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"commands--examples",children:"Commands / Examples"}),"\n",(0,a.jsx)(n.h3,{id:"hadoop-yarn",children:"Hadoop YARN"}),"\n",(0,a.jsx)(n.h4,{id:"list-node-labels",children:"List Node Labels"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn cluster --list-node-labels\n"})}),"\n",(0,a.jsx)(n.h4,{id:"list-cluster-nodes-labels",children:"List Cluster Nodes Labels"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn node -list -all -showDetails\n"})}),"\n",(0,a.jsx)(n.h4,{id:"create-node-label",children:"Create Node Label"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'yarn rmadmin -addToClusterNodeLabels "MY_TEST_LABEL(exclusive=true)"\n'})}),"\n",(0,a.jsx)(n.h4,{id:"delete-node-label",children:"Delete Node Label"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'yarn rmadmin -removeFromClusterNodeLabels "MY_TEST_LABEL"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"apache-spark",children:"Apache Spark"}),"\n",(0,a.jsx)(n.p,{children:"To target specific nodes of the cluster while launching your Spark application you can use the following spark configurations:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"spark.yarn.am.nodeLabelExpression"})," A YARN node label expression that restricts the set of nodes AM will be scheduled on"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"spark.yarn.executor.nodeLabelExpression"})," A YARN node label expression that restricts the set of nodes executors will be scheduled on"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The following example, launch a SparkPi example to run only on COMPUTE_OPTIMIZED nodes of our cluster running on c5 instances:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'spark-example \\\n  --queue analytics \\\n  --driver-cores 4 --driver-memory 4g \\\n  --executor-cores 4 --executor-memory 4g \\\n  --conf spark.yarn.am.nodeLabelExpression="CORE" \\\n  --conf spark.yarn.executor.nodeLabelExpression="COMPUTE_OPTIMIZED" \\\n  --conf spark.dynamicAllocation.maxExecutors=5 \\\n  SparkPi 5000000\n'})}),"\n",(0,a.jsx)(n.p,{children:"If you're using the default template configurations, the job will be able to request only 1 executor for the job and the COMPUTE_OPTIMIZED.PendingVCores metric will be 16 triggering a scale out operation targetting the specific Instance Group of the cluster."}),"\n",(0,a.jsx)(n.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,a.jsxs)(n.p,{children:["For troubleshooting and monitoring purposes, metrics visualization on CloudWatch offers insights into resources requested against each cluster partition.\nBesides, in the EMR Web Console you can find more details on the scaling events that occurred on the cluster. Open the EMR Web Console for the cluster of interest and select the ",(0,a.jsx)(n.strong,{children:"Events"})," tab."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"EMR Web Console Events",src:s(46).A+"",width:"1620",height:"481"})}),"\n",(0,a.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsx)(n.p,{children:"In this section, you'll find additional resources for testing this feature."}),"\n",(0,a.jsx)(n.p,{children:"To deploy the CloudFormation templates, store the relevant Bootstrap Action script in an S3 bucket. Next, launch the template from the AWS Web Console, ensuring to complete all necessary input parameters."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["EMR 6.x - ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(8416).A+"",children:"CloudFormation Template"})," / ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(6684).A+"",children:"Metric Collector Script"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html",children:"EMR - Custom Autoscale"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/NodeLabel.html",children:"Hadoop - YARN Node Labels"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://spark.apache.org/docs/latest/running-on-yarn.html",children:"Spark - Running on YARN"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},6684:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/files/yarn_labels_scaling-aee67d71c20edc990b6be9c0ecce45ac.sh"},8416:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/files/yarn_labels_scaling-aac9d118c05834d64642c51fc0f089cf.yaml"},46:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/emr_console_events-158682f82295c6500a5724c2c158c09f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var a=s(6540);const t={},o=a.createContext(t);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);