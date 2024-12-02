"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9073],{5285:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(4848),n=t(8453);const i={sidebar_label:"Data Skew"},r="Data Skew",l={id:"bestpractices/Applications/Spark/data_skew",title:"Data Skew",description:"Data imbalance, or skew, can have a significant impact on performance in big data processing systems like Apache Spark. When one task processes an unusually large portion of the dataset compared to others, it can result in several issues:",source:"@site/docs/bestpractices/Applications/Spark/data_skew.md",sourceDirName:"bestpractices/Applications/Spark",slug:"/bestpractices/Applications/Spark/data_skew",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/Spark/data_skew",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bestpractices/Applications/Spark/data_skew.md",tags:[],version:"current",frontMatter:{sidebar_label:"Data Skew"},sidebar:"bestpractices",previous:{title:"Data Quality",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/Spark/data_quality"},next:{title:"Join Types",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/Spark/joins"}},o={},d=[{value:"Salting",id:"salting",level:2},{value:"Isolated Salting",id:"isolated-salting",level:2},{value:"Isolated broadcast join",id:"isolated-broadcast-join",level:2},{value:"Hashing for SparkSQL queries",id:"hashing-for-sparksql-queries",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"data-skew",children:"Data Skew"})}),"\n",(0,a.jsx)(s.p,{children:"Data imbalance, or skew, can have a significant impact on performance in big data processing systems like Apache Spark. When one task processes an unusually large portion of the dataset compared to others, it can result in several issues:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Slowness"})," A single JVM may become overloaded with excessive data, causing delays for that specific task and potentially affecting the overall throughput of the system."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Out-of-Memory (OOM)"})," The increased memory requirements for handling larger datasets can cause OOM errors in YARN containers if not managed properly."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Disk space filling"})," As tasks process their respective portions of the data, unevenly distributed data can fill up available storage faster than expected, leading to potential bottlenecks."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"In this example, as observed in Spark UI, a single task is processing 25 times more data than other tasks. This can inevitably lead to slowness, OOMs and disk space filling issues."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"BP - 15",src:t(5520).A+"",width:"1660",height:"1002"})}),"\n",(0,a.jsx)(s.p,{children:"When there is a data skew, it is best handled at code level since very little can be done in terms of configuration. You can increase JVM size or use one fat executor per node in order to prevent OOMs to the best of ability. But this will impact other running tasks and also will not improve your job performance since one task uses only one vCPU. Following are some of the common strategies to mitigate data skew at code level."}),"\n",(0,a.jsx)(s.h2,{id:"salting",children:"Salting"}),"\n",(0,a.jsx)(s.p,{children:"Salting is an effective technique used for skew reduction in data processing systems. By adding a random value or \"salt\" to a skewed column, such as 'col1', we aim to distribute the data more evenly among processing units. This method can also involve splitting the salted column into several smaller ones, like 'col1_0', 'col1_1', and so forth. The greater the number of salts employed, the less pronounced the skew becomes, enabling improved task parallelism."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{style:{textAlign:"center"},children:"Original data"}),(0,a.jsx)(s.th,{style:{textAlign:"center"},children:"Salted 4 times"}),(0,a.jsx)(s.th,{style:{textAlign:"center"},children:"Salted 8 times"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"center"},children:(0,a.jsx)(s.img,{alt:"BP - 17",src:t(5682).A+"",title:"Original data",width:"643",height:"512"})}),(0,a.jsx)(s.td,{style:{textAlign:"center"},children:(0,a.jsx)(s.img,{alt:"BP - 18",src:t(213).A+"",title:"Salted 4  times",width:"702",height:"512"})}),(0,a.jsx)(s.td,{style:{textAlign:"center"},children:(0,a.jsx)(s.img,{alt:"BP - 19",src:t(7324).A+"",title:"Salted 8 times",width:"681",height:"512"})})]})})]}),"\n",(0,a.jsx)(s.p,{children:"A typical Salting workflow looks like below:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"BP - 20",src:t(5928).A+"",width:"1674",height:"658"})}),"\n",(0,a.jsx)(s.p,{children:"For example, a salt column is added to the data with 100 randomized salts during narrow transformation phase (map or flatMap type of transforms)."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:'from pyspark.sql.functions import rand\nn = 100\nsalted_df = df.withColumn("salt", (rand() * n).cast("int"))\n'})}),"\n",(0,a.jsx)(s.p,{children:"Now, aggregation is performed on this salt column and the results are reduced by keys"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:'unsalted_df = (\n    salted_df.groupBy("salt", groupByFields)\n    .agg(aggregateFields)\n    .groupBy(groupByFields)\n    .agg(aggregateFields)\n)\n'})}),"\n",(0,a.jsx)(s.p,{children:"The same principle applies when dealing with windowing functions. However, it's essential to note that there are potential drawbacks associated with this strategy. One significant disadvantage arises from creating numerous tiny tasks for non-skewed keys. This situation could negatively influence the overall performance of the job due to increased overhead costs related to managing these multitudes of smaller tasks. Therefore, careful consideration should be given before implementing salting techniques."}),"\n",(0,a.jsx)(s.h2,{id:"isolated-salting",children:"Isolated Salting"}),"\n",(0,a.jsx)(s.p,{children:"In this approach salting is applied to only subset of the keys. If 80% or more data has a single value, isolated salting approach could be considered (for eg: skew due to NULL columns). In narrow transformation phase, we will isolate the skewed column. In the wide transformation phase, we  will isolate and reduce the heavily skewed column after salting. Finally, we will reduce other values without the salt and merge the results. Isolated Salting workflow looks like below:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"BP - 21",src:t(4193).A+"",width:"1839",height:"760"})}),"\n",(0,a.jsx)(s.p,{children:"Example code looks like below:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-scala",children:'val count = 4\nval salted = df.withColumn("salt", when(\'col === "A", rand(1) * count cast IntegerType) otherwise 0)\nval replicaDF = skewDF\n      .withColumn("replica", when(\'col === "A", (0 until count) toArray) otherwise Array(0))\n      .withColumn("salt", explode(\'replica\'))\n      .drop(\'replica\')\nval merged = salted.join(replicaDF, joinColumns :+ "salt")\n'})}),"\n",(0,a.jsx)(s.h2,{id:"isolated-broadcast-join",children:"Isolated broadcast join"}),"\n",(0,a.jsx)(s.p,{children:"In this approach, smaller lookup table is broadcasted across the workers and joined in map phase itself. Thus, reducing the amount of data shuffles. Similar to last approach, skewed keys are separated from normal keys. Then, we reduce the \u201dnormal\u201d keys and perform map-side join on isolated \u201dskewed\u201d keys. Finally, we can merge the results of skewed and normal joins"}),"\n",(0,a.jsx)(s.p,{children:"Isolated map-side join workflow looks like below:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"BP - 22",src:t(5210).A+"",width:"1827",height:"672"})}),"\n",(0,a.jsx)(s.p,{children:"Example code looks like below:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-scala",children:'val count = 8\nval salted = skewDF.withColumn("salt", when(\'col === "A", rand(1) * count cast IntegerType) otherwise 0).repartition(\'col\', \'salt\') // Re-partition to remove skew\nval broadcastDF = salted.join(broadcast(sourceDF), "symbol")\n'})}),"\n",(0,a.jsx)(s.h2,{id:"hashing-for-sparksql-queries",children:"Hashing for SparkSQL queries"}),"\n",(0,a.jsx)(s.p,{children:"While running SparkSQL queries using window functions on skewed data, you may have observed that it runs out of memory sometimes. Following could be an example query working on top of a skewed dataset."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"select *, ROW_NUMBER() OVER (partition by l_orderkey order by l_orderkey) AS row_num FROM testdb.skewlineitem\n"})}),"\n",(0,a.jsx)(s.p,{children:"Considering there is a skew in l_orderkey field, we can split the above query into 4 hashes."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"select * from (select *, ROW_NUMBER() OVER (partition by l_orderkey order by l_orderkey) AS row_num FROM testdb.skewlineitem where cast(l_orderkey as integer)%4 = 1\nunion\nselect *, ROW_NUMBER() OVER (partition by l_orderkey order by l_orderkey ) AS row_num FROM testdb.skewlineitem where cast(l_orderkey as integer)%4 = 2\nunion\nselect *, ROW_NUMBER() OVER (partition by l_orderkey order by l_orderkey ) AS row_num FROM testdb.skewlineitem where cast(l_orderkey as integer)%4 = 3\nunion\nselect *, ROW_NUMBER() OVER (partition by l_orderkey order by l_orderkey ) AS row_num FROM testdb.skewlineitem where cast(l_orderkey as integer)%4 = 4 )\nlimit 10;\n"})}),"\n",(0,a.jsx)(s.p,{children:"If the values are highly skewed, then salting approaches should be used instead since this approach will still send all the skewed keys to a single task. This approach should be used to prevent OOMs quickly rather than to increase performance. The read job is re-computed for the number of sub queries written."})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5520:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/spark-bp-15-e6d784e6f83c9981cf097478055217bd.png"},5682:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/spark-bp-17-115f9dd7daddd1e59b3447a66eff58e7.png"},213:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/spark-bp-18-90689f7887ef2c50750b2ccf8815b180.png"},7324:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/spark-bp-19-6f06b4ea27d0af7b875eae0acfdbcc8d.png"},5928:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/spark-bp-20-c7dcbdbaec548fa391bc8da4b1a8d491.png"},4193:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/spark-bp-21-ce2628117a834c5411ad2e9aad06574e.png"},5210:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/spark-bp-22-fa916500caa5d75f93573d718bc31b81.png"},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>l});var a=t(6540);const n={},i=a.createContext(n);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);