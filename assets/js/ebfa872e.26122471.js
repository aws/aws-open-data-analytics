"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1981],{8367:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=t(4848),n=t(8453);const r={sidebar_position:3,sidebar_label:"Reading Spark UI"},s="Spark UI and Spark History Server Analysis",o={id:"benchmarks/Analyzing/read_spark_UI",title:"Spark UI and Spark History Server Analysis",description:"In this section we\u2019re going to explore the Spark Web UI to understand what are the main sections and information it provides, to better understand how we can leverage this tool to review our benchmark results.",source:"@site/docs/benchmarks/Analyzing/read_spark_UI.md",sourceDirName:"benchmarks/Analyzing",slug:"/benchmarks/Analyzing/read_spark_UI",permalink:"/aws-emr-best-practices/docs/benchmarks/Analyzing/read_spark_UI",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/benchmarks/Analyzing/read_spark_UI.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Reading Spark UI"},sidebar:"benchmarks",previous:{title:"Retrieving Spark Event Logs",permalink:"/aws-emr-best-practices/docs/benchmarks/Analyzing/retrieve_event_logs"},next:{title:"Benchmark Results",permalink:"/aws-emr-best-practices/docs/benchmarks/Resources/Benchmark_results"}},c={},h=[{value:"Overview",id:"overview",level:4},{value:"Spark History Server",id:"spark-history-server",level:4},{value:"Stages",id:"stages",level:4},{value:"Storage",id:"storage",level:4},{value:"Environment",id:"environment",level:4},{value:"Executors",id:"executors",level:4},{value:"SQL/DataFrame",id:"sqldataframe",level:4}];function d(e){const a={a:"a",em:"em",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"spark-ui-and-spark-history-server-analysis",children:"Spark UI and Spark History Server Analysis"})}),"\n",(0,i.jsx)(a.p,{children:"In this section we\u2019re going to explore the Spark Web UI to understand what are the main sections and information it provides, to better understand how we can leverage this tool to review our benchmark results."}),"\n",(0,i.jsx)(a.h4,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(a.p,{children:"The Spark Web UI is a web interface that can be found on each EMR on EC2 cluster where Spark is installed. The interface can be accessed in two ways:"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.em,{children:"Spark Driver Web UI"}),"* The Spark Driver by default exposes the Spark Web UI using information from the live application. This is the most comprehensive interface, as you can see live data of your applications in terms of disk and memory utilization. You can easily locate and connect to this intefacte by connecting on the YARN Resource Manger and then opening the Application Master URL available for the running Spark application.*"]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.em,{children:"Spark History Server"}),"* This is a service that Spark provides to review completed or running applications on the cluster. The interface is available on the EMR Primary (MASTER) node of the cluster and can be reached at the following address: ",(0,i.jsx)(a.a,{href:"http://master-public-dns-name:18080/",children:"http://master-public-dns-name:18080/"}),". It\u2019s important to note that this interface uses the Spark Event Logs to populate the information that are available only at runtime (e.g. caching) might not be present in this interface.*"]}),"\n",(0,i.jsx)(a.h4,{id:"spark-history-server",children:"Spark History Server"}),"\n",(0,i.jsxs)(a.p,{children:["Once opened, the service will show us a summary of all the applications that are stored in the default Spark Event Log directory (",(0,i.jsx)(a.em,{children:"hdfs:///var/log/spark/apps"}),"). Each application provides summary information as the Spark version used for the job (typically the same version installed on the cluster), the YARN application ID, it\u2019s name (if you defined in your code) and time details to determine the application duration. Specifically the duration field is a useful field as it provides a metrics for the duration of the application since the Spark driver was launched and terminated, excluding additional submission details that are specific for different deployment models, so it can be useful to compare the Spark runtime across different versions or providers."]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 2",src:t(1534).A+"",width:"1795",height:"375"})}),"\n",(0,i.jsxs)(a.p,{children:["Once selected an application, you\u2019ll be redirected to the corresponding application page where you can have a summarized view of all the Spark Jobs executed in your application. A Spark Job is triggered by a ",(0,i.jsx)(a.a,{href:"https://spark.apache.org/docs/latest/rdd-programming-guide.html#actions",children:"Spark RDD Action"})," (or any Spark Dataset API which internally relies on the previously mentioned API) so it can give you a good indication of which portions of your code took more time to execute and you can also use it to compare two jobs executed in different environments or with different configurations to spot differences in terms of time processing. In those last cases is useful to sort your Jobs by Duration using the interface."]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 3",src:t(4023).A+"",width:"1796",height:"939"})}),"\n",(0,i.jsx)(a.p,{children:"Additionally, this page provides additional information on the top left page:"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.em,{children:"User"}),"* The user who launched the application. In Amazon EMR this typically match the hadoop user unless you\u2019re using the Hadoop impersonation.\n",(0,i.jsx)(a.em,{children:"Total Uptime"}),"* Time since the Spark application started till the completion of the last Job\n",(0,i.jsx)(a.em,{children:"Scheduling Mode"}),"* The ",(0,i.jsx)(a.a,{href:"https://spark.apache.org/docs/latest/job-scheduling.html#scheduling-within-an-application",children:"internal scheduler"})," used within the Spark Application to execute the Spark Jobs. By default Spark uses a FIFO (First In First Out) scheduler.*"]}),"\n",(0,i.jsx)(a.p,{children:"Lastly, this page allows you you to review the lifecycle of your application, by expanding theEvent Timeline** section where you can review how the different Spark Jobs were executed during the time, as also Spark Executors launch and termination, that can give you useful information to detect slow-downs due to the lack of resources (e.g. you\u2019re using the Spark Dynamic allocation along with a cluster managed scaler and the nodes took too much time to be added to the cluster)."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 4",src:t(4408).A+"",width:"1573",height:"395"})}),"\n",(0,i.jsx)(a.p,{children:"Finally the top bar on top of the page (see picture), allows you to review additional information related to the Spark Application."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 5",src:t(7006).A+"",width:"1582",height:"48"})}),"\n",(0,i.jsx)(a.p,{children:"In the next sections, we\u2019re going to review each of them."}),"\n",(0,i.jsx)(a.h4,{id:"stages",children:"Stages"}),"\n",(0,i.jsx)(a.p,{children:"As for the Jobs page, you can review also all the Stages that have been processed in your application. This pages can be reached directly from the Web UI, and in this case it will display all the Stages of the application, or you can select a single Spark Job in theJobs** section if you\u2019re only interested to the Stages processed in an individual Spark Job."}),"\n",(0,i.jsx)(a.p,{children:"The main Stage page provides information about duration and submission of a stage, along with related tasks processed and aggregated metrics for input/output data read from the stage, along with related shuffle metrics."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 6",src:t(3514).A+"",width:"1796",height:"860"})}),"\n",(0,i.jsx)(a.p,{children:"If you expand an individual Stage, you\u2019ll be redirected on a more detailed page where you can examine aggregated metrics of the Tasks processed in the stage."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 7",src:t(1267).A+"",width:"3441",height:"1145"})}),"\n",(0,i.jsx)(a.h4,{id:"storage",children:"Storage"}),"\n",(0,i.jsx)(a.p,{children:"TheStorage page** contains information about RDD blocks that have been cached or persisted in memory or on the local disks of the cluster. This page will show some details only if you explicitly invoke a persist or cache operation against a Spark Dataframe. More in detail, the page shows for each RDD:"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.em,{children:"Name"}),"* Typically a logical name identified by the spark relation that created the RDD blocks\n",(0,i.jsx)(a.em,{children:"Storage Level"}),"* Where the data has been cached (Memory only) or persisted (Memory / Disk / Memory and Disk)\n",(0,i.jsx)(a.em,{children:"Cache Partitions"}),"* Number of RDD partitions cached\n",(0,i.jsx)(a.em,{children:"Fraction Cached"}),"* Percentage of the data in the cache\n",(0,i.jsx)(a.em,{children:"Size In Memory"}),"* Portion of data that have been stored on the Spark Executor Memory\n",(0,i.jsx)(a.em,{children:"Size On Disk"}),"* Portion of data stored on the local disks of the nodes of the cluster*"]}),"\n",(0,i.jsx)(a.p,{children:"Below an example of a Spark DataFrame persisted both in Memory and on local Disks, with serialized and replicated data (StorageLevel.MEMORY_AND_DISK_SER_2)."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 8",src:t(7396).A+"",width:"1563",height:"425"})}),"\n",(0,i.jsx)(a.p,{children:"Besides, you can can also access a more detailed paged about the cached element by selecting the RDD of interest. In this case a new page will be opened, with additional information about the distribution and storage footprint of the object along with storage locations of the cached blocks."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 9",src:t(1293).A+"",width:"1563",height:"1007"})}),"\n",(0,i.jsx)(a.p,{children:"As mentioned, this information are typically available only on a running application, so either if your application is caching some data, you might not be able to see this information if you open a completed application in the Spark History UI."}),"\n",(0,i.jsx)(a.h4,{id:"environment",children:"Environment"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 10",src:t(737).A+"",width:"1796",height:"699"})}),"\n",(0,i.jsx)(a.p,{children:"TheEnvironment** page display all the main configurations that have been used to execute the Spark Application. Within this section there are seven sections:"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.em,{children:"Runtime Information"}),"* Core details about the Java and Scala versions used to run the job\n",(0,i.jsx)(a.em,{children:"Spark Properties"}),"* Contains Spark configurations defined while launching the application and retrieved from the ",(0,i.jsx)(a.em,{children:"/etc/spark/conf/spark-defaults.conf"})," configuration file. Additional Spark main configurations that are mandatory to run a job are also visualized with their defaults if not overridden.\n",(0,i.jsx)(a.em,{children:"Resource Profiles"}),"* Contains profiles for the Spark Executors requests that are going to be submitted to the Resource Manager where the job will run (e.g. Hadoop, Kubernetes, etc.)\n",(0,i.jsx)(a.em,{children:"Hadoop Properties"}),"* As for the Spark section, it contains Hadoop configurations required by the job as detected by the Hadoop configurations files, typically stored in ",(0,i.jsx)(a.em,{children:"/etc/hadoop/conf/"}),".\n",(0,i.jsx)(a.em,{children:"System Properties"}),"* Environmental variables and java properties that are configured in the Spark Drivers and Executors.\n",(0,i.jsx)(a.em,{children:"Metric Properties"}),"* Spark metrics configurations as defined while launching the application, or inferred from the ",(0,i.jsx)(a.em,{children:"/etc/spark/conf/metrics.properties"})," configuration file.\n",(0,i.jsx)(a.em,{children:"Classpath Entries"}),"* Contains JAR dependencies used by Spark and the Application*"]}),"\n",(0,i.jsx)(a.h4,{id:"executors",children:"Executors"}),"\n",(0,i.jsx)(a.p,{children:"Within theExecutors** page, you can find aggregated statistics and details about all the Spark Task that have been processed in the job. In detail, the page contains two main sections: Summary and Executors."}),"\n",(0,i.jsx)(a.p,{children:"TheSummary** section provide aggregated information across all the Spark Executors. This main box can give you an idea of Executors terminated and that were active within the application lifecycle. On the other side, theExecutor** box gives you the same information (with additional details) aggregated for each executor (driver included) that was used in the application."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 11",src:t(792).A+"",width:"2147",height:"944"})}),"\n",(0,i.jsx)(a.p,{children:"There are several information available in this page, and they can typically be useful when sizing or trying to optimize an application in terms of consumption. Below a list of the most important parameters:"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.em,{children:"Storage Memory"}),"* Identifies the memory used / total memory available in the executor memory for storing cached data. By default this corresponds to 0.5 of the Spark Memory defined as (",(0,i.jsx)(a.strong,{children:"Container Heap Memory - Reserved Memory) * spark.memory.fraction"}),"\n",(0,i.jsx)(a.em,{children:"On Heap Storage Memory"}),"* Similar to the previous entry, but also provides a split across On Heap and Off Heap Storage Memory used\n",(0,i.jsxs)(a.em,{children:["Disk Used\n**\n",(0,i.jsx)(a.em,{children:"Peak JVM Memory"})]})," Provides an aggregated view of the memory utilization across the Spark Driver/Executor utilization. This includes both Spark Storage and Execution memory and Reserved Memory.\n",(0,i.jsx)(a.em,{children:"Peak Execution Memory"}),"* Shows the memory utilization for the Spark Execution Memory. This portion of the memory is used by Spark to process tasks and is the memory the get spilled on the disks when Spark requires more memory to complete a task\n",(0,i.jsx)(a.em,{children:"Peak Storage Memory"}),"* This highlights the peak memory utilization ot the Storage Memory used for caching RDDs\n",(0,i.jsx)(a.em,{children:"Cores"}),"* Number of CPU cores available in the executors launched. The number of cores is typically a static value defined while launching a Spark application (unless you\u2019re using the EMR hetherogeneous executors), and defines the maximum number of tasks that can be processed in parallel on the Executor\n",(0,i.jsx)(a.em,{children:"Active Tasks"}),"* Number of Spark tasks currently running on the executor\n",(0,i.jsx)(a.em,{children:"Failed Tasks"}),"* Number of Spark tasks that failed on the executor\n",(0,i.jsx)(a.em,{children:"Complete Tasks"}),"* Aggregated total count of all the tasks processed by an executor\n",(0,i.jsx)(a.em,{children:"Total Tasks"}),"* Overall total number of Spark tasks processed (active + failed + complete)\n",(0,i.jsx)(a.em,{children:"Task Time (GC Time)"}),"* Aggregated time required to process the task that were running on the executors. This also includes Garbage Collection aggregated time. When the GC Time is greater than 10% of the Task time the box will be displayed with a red background to highlight an excessive number of GC operations\n",(0,i.jsx)(a.em,{children:"Input"}),"* Bytes read from the Executors from a Storage source (e.g. HDFS, Amazon S3, etc.)\n",(0,i.jsx)(a.em,{children:"Shuffle Read"}),"* Total bytes of shuffle data read from an Executor. This includes both local and remote shuffle data\n*Shuffle Write**Total bytes of shuffle data written on the local disk of the Spark Executor\n**"]}),"\n",(0,i.jsx)(a.h4,{id:"sqldataframe",children:"SQL/DataFrame"}),"\n",(0,i.jsx)(a.p,{children:"Finally, the SQL/DataFrame page is another important page, which summarize all Spark Queries executed in a Spark Application. This page is only visible in the UI if your application is using Dataset or DataFrame Spark APIs. If you don\u2019t see this page in your application, you can infer the following information:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Your application is using the old RDD APIs"}),"\n",(0,i.jsx)(a.li,{children:"Your application migth not be using Spark at its best as most of the Spark optimizations techniques are applied by the Spark Catalyst Optimizer that is only used when working with Dataset/ DataFrame APIs. So if possible try to upgrade your application to use the new APIs."}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"The summary page provides, a description of the Query ID, its duration and the Spark Jobs that were launched to execute the specific query (Job IDs)"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 12",src:t(7651).A+"",width:"2112",height:"827"})}),"\n",(0,i.jsx)(a.p,{children:"If you select a single query, you\u2019ll be redirected to a more detailed page where you can examine a visual graph of the Spark operations performed in the application."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 13",src:t(6074).A+"",width:"1133",height:"1136"})}),"\n",(0,i.jsx)(a.p,{children:"The graph can simplify the analysis on an application as each stage provides aggregated information about the number of rows and data processed. Additionally, you can also review the Spark Plans generated by the application expanding the Details section below the graph."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Benchmark - 14",src:t(373).A+"",width:"3418",height:"1034"})})]})}function l(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},737:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-10-10a9a1429b2528f7fc5bff6f9617fd31.png"},792:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-11-983e97e60cffc5dae1fcdf7f6cfbeac5.png"},7651:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-12-53a0c3844142f73589e6e2b5f2331d36.png"},6074:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-13-a3d42e6dff16f9222918bb5065d333e8.png"},373:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-14-811122fd5353970ed2e9b2153cf256e3.png"},1534:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-2-9a762b22489ba1c7540364056da8e934.png"},4023:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-3-edc134b799c28ede3f5ecfdcc531f0dc.png"},4408:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-4-5ff68a2a3055bb9a30c2c40ad562ad2c.png"},7006:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-5-d55b45b8efe1fc461ecc8ebfc6a9f8a7.png"},3514:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-6-7d2ac0c3fc13fa3da8bfeac5a02d2e4b.png"},1267:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-7-7522a1d2318d89ac28dbde7d807db54b.png"},7396:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-8-b6be688b49996891e8ff7f2ec88643d0.png"},1293:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/benchmark-9-f4133c16fd2c6cdb628f4ca1c8e23ebe.png"},8453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>o});var i=t(6540);const n={},r=i.createContext(n);function s(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);