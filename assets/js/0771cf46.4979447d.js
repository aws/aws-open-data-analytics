"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7513],{2218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(4848),r=n(8453);const a={sidebar_position:2,sidebar_label:"Best Practices"},i="EMRFS - AIMD Retry Strategy for Amazon S3 Requests in EMRFS",o={id:"bestpractices/Features/EMRFS/best_practices",title:"EMRFS - AIMD Retry Strategy for Amazon S3 Requests in EMRFS",description:"Amazon EMR File System (EMRFS) is a feature that allows Amazon EMR clusters to directly access data stored in Amazon S3. However, in large clusters, the high volume of S3 requests can sometimes lead to throttling exceptions from S3. To address this issue, starting with Amazon EMR release 6.4.0, EMRFS supports an alternative retry strategy based on the Additive Increase/Multiplicative Decrease (AIMD) algorithm.",source:"@site/docs/bestpractices/4 - Features/EMRFS/best_practices.md",sourceDirName:"bestpractices/4 - Features/EMRFS",slug:"/bestpractices/Features/EMRFS/best_practices",permalink:"/aws-emr-best-practices/docs/bestpractices/Features/EMRFS/best_practices",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bestpractices/4 - Features/EMRFS/best_practices.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Best Practices"},sidebar:"bestpractices",previous:{title:"Best Practices",permalink:"/aws-emr-best-practices/docs/bestpractices/Security/best_practices"},next:{title:"Best Practices",permalink:"/aws-emr-best-practices/docs/bestpractices/Features/Managed Scaling/best_practices"}},l={},c=[{value:"When to Enable the AIMD Retry Strategy",id:"when-to-enable-the-aimd-retry-strategy",level:2},{value:"When Not to Enable the AIMD Retry Strategy",id:"when-not-to-enable-the-aimd-retry-strategy",level:2},{value:"Benchmark",id:"benchmark",level:2},{value:"Analyzing Job S3 Requests and Throttling",id:"analyzing-job-s3-requests-and-throttling",level:2},{value:"S3 Request / Counts",id:"s3-request--counts",level:2},{value:"S3 requests visualization",id:"s3-requests-visualization",level:2},{value:"Alternative Approach - S3 analysis using YARN Container Logs",id:"alternative-approach---s3-analysis-using-yarn-container-logs",level:2},{value:"EMR Cluster Classification",id:"emr-cluster-classification",level:2},{value:"spark_s3_analyze.sh - Script to analyze YARN Container logs for S3 details",id:"spark_s3_analyzesh---script-to-analyze-yarn-container-logs-for-s3-details",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"emrfs---aimd-retry-strategy-for-amazon-s3-requests-in-emrfs",children:"EMRFS - AIMD Retry Strategy for Amazon S3 Requests in EMRFS"})}),"\n",(0,s.jsx)(t.p,{children:"Amazon EMR File System (EMRFS) is a feature that allows Amazon EMR clusters to directly access data stored in Amazon S3. However, in large clusters, the high volume of S3 requests can sometimes lead to throttling exceptions from S3. To address this issue, starting with Amazon EMR release 6.4.0, EMRFS supports an alternative retry strategy based on the Additive Increase/Multiplicative Decrease (AIMD) algorithm."}),"\n",(0,s.jsx)(t.p,{children:"The AIMD retry strategy is designed to dynamically adjust the request rate to S3 based on the success or failure of recent requests. This approach helps reduce the number of throttled requests and the total number of attempts required per request, ultimately improving the overall performance and efficiency of S3 interactions. The AIMD algorithm works as follows:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Additive Increase: When consecutive requests to S3 are successful, the request rate is gradually increased in small increments. This allows EMRFS to probe for available bandwidth without overwhelming S3."}),"\n",(0,s.jsx)(t.li,{children:"Multiplicative Decrease: If S3 returns a 503 (Slow Down) response, indicating throttling, the request rate is reduced multiplicatively by a larger factor. This rapid reduction helps alleviate congestion and prevent further throttling."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"By default, the AIMD retry strategy is disabled in EMRFS, as it can potentially degrade performance in some scenarios, especially if other accounts or jobs are causing the high load on the S3 bucket used by the cluster. However, for large Amazon EMR clusters that frequently encounter throttling exceptions, enabling the AIMD retry strategy can significantly improve the overall performance and reliability of S3 interactions."}),"\n",(0,s.jsxs)(t.p,{children:["To enable the AIMD retry strategy, users need to set the fs.s3.aimd.enabled property to true in their emrfs-site configuration. Additionally, EMRFS provides several advanced configuration properties to fine-tune the AIMD behavior, such as ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-emrfs-retry.html#emr-spark-emrfs-retry-advanced-properties",children:"adjusting the rate of increase and decrease, setting minimum and maximum request rates, and controlling the frequency of rate adjustments."})]}),"\n",(0,s.jsxs)(t.p,{children:["While the AIMD retry strategy may result in slightly lower throughput compared to more aggressive approaches (default ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-emrfs-retry.html#emr-spark-emrfs-retry-exponential-backoff",children:"exponential backoff strategy"}),"), it strikes a balance between achieving reasonable performance and maintaining network stability and fairness. By dynamically adjusting the request rate based on network conditions, AIMD helps prevent congestion collapse and promotes better overall performance for large Amazon EMR clusters heavily interacting with Amazon S3."]}),"\n",(0,s.jsx)(t.h2,{id:"when-to-enable-the-aimd-retry-strategy",children:"When to Enable the AIMD Retry Strategy"}),"\n",(0,s.jsx)(t.p,{children:"To determine when to enable the AIMD strategy, we need to first understand the main factors contributing to S3 throttling. Typically, if a single application is generating S3 throttled requests, excluding third-party interactions (other jobs or accounts reading/writing to the bucket), the throttling is primarily driven by the number of concurrent S3 requests generated by each container, which is typically influenced by the number of vCores used in the container."}),"\n",(0,s.jsxs)(t.p,{children:["The number of S3 requests can vary significantly depending on the characteristics of the files being read or written during the job. S3 has different rate limits for different API requests (",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html",children:"3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second"}),"), so certain job phases might be more prone to throttling depending on the operations being performed."]}),"\n",(0,s.jsxs)(t.p,{children:["It's important to note that bucket ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/ErrorCodeBilling.html",children:"owners aren't billed for HTTP 5XX server error responses"}),", such as HTTP 503 Slow Down errors. From a cost perspective, the advantage of using the AIMD retry strategy can be significant if it can reduce job duration in the event of S3 throttled requests compared to the default exponential backoff retry strategy."]}),"\n",(0,s.jsx)(t.p,{children:"Having discussed the factors contributing to S3 throttling, we can highlight some guidelines that can help determine when to consider enabling the AIMD retry strategy:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Large Cluster Size: If you have a cluster with a total number of vCores greater than the S3 request limits (e.g., 4,000 vCores exceeding the 3,500 PUT request limit per second), it is highly likely to generate throttled requests, especially if the data size and shape allow for it."}),"\n",(0,s.jsx)(t.li,{children:"Write-Intensive Jobs on Medium-Sized Clusters: For write-intensive jobs running on medium-sized clusters (more than 1,500 vCores) that generate a high number of small files (less than 10 MiB), enabling the AIMD strategy may be beneficial."}),"\n",(0,s.jsx)(t.li,{children:"Significant Throttling: If more than 20% of the total S3 calls generated by a single job are throttled, considering the AIMD retry strategy could be advantageous."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Enabling the AIMD strategy can be particularly useful when dealing with large clusters or write-intensive workloads involving numerous small files. In these scenarios, the default exponential backoff strategy may not be efficient in handling the high volume of throttled requests, leading to prolonged job duration."}),"\n",(0,s.jsx)(t.h2,{id:"when-not-to-enable-the-aimd-retry-strategy",children:"When Not to Enable the AIMD Retry Strategy"}),"\n",(0,s.jsx)(t.p,{children:"While the AIMD retry strategy is beneficial for large clusters with dedicated S3 buckets facing severe throttling issues, it may not be necessary or even harmful in certain situations. For smaller clusters, enabling the AIMD retry strategy may degrade performance if the throttled requests are caused by other clusters or applications external to your cluster. In this case, you might end up sacrificing throughput on the small cluster even though it is not the primary cause of the issue."}),"\n",(0,s.jsx)(t.p,{children:"Besides, overall the AIMD can increase the processing time of a job, thus increasing the overall compute costs, so AIMD should be enabled only whenever required and shouldn't be used as a default retry strategy unless strictly required. If the number of throttling events is not significant, the overhead of dynamically adjusting the request rate may outweigh the benefits of reduced throttling. Therefore, it's crucial to evaluate the trade-off between improved reliability and potential performance impact before enabling AIMD."}),"\n",(0,s.jsx)(t.h2,{id:"benchmark",children:"Benchmark"}),"\n",(0,s.jsx)(t.p,{children:"For these tests, we used a simple Spark application to read and write an input dataset from S3. We then tuned some Spark configurations to increase the chances of triggering S3 throttled requests using the same job during the write operation. Below is an example of the scripts used to create and submit the Spark jobs:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'script_path="/tmp/spark-s3-throttle.py"\ninput_path="s3://ripani.dub.tests/store_sales/"\noutput_path="s3://ripani.dub.tests/emrfs_default/"\n\ncat << EOF > $script_path\nimport sys\nfrom pyspark.sql import SparkSession\n\ninput_path = sys.argv[1]\noutput_path = sys.argv[2]\n\nspark = SparkSession.builder.getOrCreate()\ndf = spark.read.parquet(input_path)\ndf.write.mode(\'overwrite\').parquet(output_path)\nEOF\n'})}),"\n",(0,s.jsx)(t.p,{children:"We used various spark-submit commands to trigger the tests with different configurations:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'## standard configurations\nspark-submit --deploy-mode cluster \\\n--conf spark.yarn.maxAppAttempts=1 \\\n$script_path $input_path $output_path\n\n# 1M max records per file\nspark-submit --deploy-mode cluster --conf spark.yarn.maxAppAttempts=1 \\\n--conf spark.sql.files.maxPartitionBytes="1GB" \\\n--conf spark.sql.files.maxRecordsPerFile="1000000" \\\n$script_path $input_path $output_path\n\n# 500k max records per file\nspark-submit --deploy-mode cluster \\\n--conf spark.yarn.maxAppAttempts=1 \\\n--conf spark.sql.files.maxPartitionBytes="1GB" \\\n--conf spark.sql.files.maxRecordsPerFile="500000" \\\n$script_path $input_path $output_path\n\n# 250k max records per file\nspark-submit --deploy-mode cluster \\\n--conf spark.yarn.maxAppAttempts=1 \\\n--conf spark.sql.files.maxPartitionBytes="1GB" \\\n--conf spark.sql.files.maxRecordsPerFile="250000" \\\n$script_path $input_path $output_path\n\n# 100k max records per file\nspark-submit --deploy-mode cluster \\\n--conf spark.yarn.maxAppAttempts=1 \\\n--conf spark.sql.files.maxPartitionBytes="1GB" \\\n--conf spark.sql.files.maxRecordsPerFile="100000" \\\n$script_path $input_path $output_path\n'})}),"\n",(0,s.jsx)(t.p,{children:"To run the tests, we used a 200 m5d.2xlarge EMR cluster (for a total of 1600 vCores) running emr-7.1.0. As evident from the Python script, we wrote all the data to a single bucket prefix with no partitioning to increase the chances of throttled requests during write operations."}),"\n",(0,s.jsxs)(t.p,{children:["Below a table summarizing data collected during the tests:\n",(0,s.jsx)(t.img,{src:n(3432).A+"",width:"2264",height:"384"}),"\nThe benchmark tested different configurations of spark.sql.files.maxPartitionBytes and spark.sql.files.maxRecordsPerFile to produce various output file shapes and sizes, ranging from a standard 133 MiB files per partition up to 579,158 small 5.2 MiB files. The input dataset consisted of 1486 files totaling 2.7 TiB of compressed parquet data."]}),"\n",(0,s.jsx)(t.p,{children:"Across these workloads, enabling the AIMD retry strategy provided substantial benefits in reducing S3 throttling and improving job duration when throttling was a major bottleneck:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For the most throttling-prone case writing 579,158 small 5.2 MiB files (row 9), the default strategy experienced 23.5% throttled S3 requests. With AIMD (row 10), this dropped to just 0.56% while decreasing runtime by 11.6%."}),"\n",(0,s.jsx)(t.li,{children:"Writing 232,594 small 12.6 MiB files (rows 7-8), AIMD reduced throttling from 14.6% to 0.67, but  improved runtime by 10.4%."}),"\n",(0,s.jsx)(t.li,{children:"Similar to the previous entry in rows 5-6, AIMD cut throttling from 14.62% to 0.67% but increased of a 29% the overall job runtime."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The results demonstrate AIMD's effectiveness at mitigating severe throttling scenarios caused by highly parallel, write-intensive workloads on large EMR clusters. While providing substantial reliability and performance gains in these cases, AIMD can slightly degrade performance when throttling pressure is low. For the above reasons, we recommend to benchmark your cluster before enabling the AIMD retry strategy in a production job, if costs is your main concerns."}),"\n",(0,s.jsx)(t.h2,{id:"analyzing-job-s3-requests-and-throttling",children:"Analyzing Job S3 Requests and Throttling"}),"\n",(0,s.jsxs)(t.p,{children:["To analyze the S3 requests generated by an EMR job, you can choose from the methods listed in the Logging options for Amazon S3 available in the AWS Documentation (",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/logging-with-S3.html",children:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/logging-with-S3.html"}),"). Please note that Logging Amazon S3 API calls using AWS CloudTrail can deliver the logs faster in the S3 bucket for analysis (around 5 minutes) but has some additional costs."]}),"\n",(0,s.jsx)(t.p,{children:"To analyze the S3 request logs, you can follow these steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Enable S3 logging the S3 buckets used by your cluster (",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-cloudtrail-logging-for-s3.html",children:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-cloudtrail-logging-for-s3.html"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Create a CloudTrail Athena Table to analyze the S3 requests using SQL queries (",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html#create-cloudtrail-table-partition-projection",children:"https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html#create-cloudtrail-table-partition-projection"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"Query the data."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"s3-request--counts",children:"S3 Request / Counts"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"-- Get S3 Requests counts by S3 API name\nWITH app AS (\n  SELECT\n    date_parse('2024-06-04T14:39:56Z', '%Y-%m-%dT%H:%i:%sZ') AS start_time,\n    date_parse('2024-06-04T14:58:54Z', '%Y-%m-%dT%H:%i:%sZ') AS end_time,\n    'arn:aws:iam::YOUR_ACCOUNT_ID:role/EMR_EC2_DefaultRole' AS ec2_role\n)\nSELECT\n  eventname,\n  count(*) AS request_count\nFROM \"SCHEMA\".\"YOUR_CT_TABLE_NAME\", app\nWHERE date_parse(eventtime, '%Y-%m-%dT%H:%i:%sZ') >= app.start_time\n  AND date_parse(eventtime, '%Y-%m-%dT%H:%i:%sZ') < app.end_time\n  AND useridentity.sessioncontext.sessionissuer.arn = app.ec2_role\nGROUP BY eventname\nORDER BY request_count DESC;\n\n-- Get S3 Throttled Requests counts by S3 API name\nWITH app AS (\n  SELECT\n    date_parse('2024-06-04T14:39:56Z', '%Y-%m-%dT%H:%i:%sZ') AS start_time,\n    date_parse('2024-06-04T14:58:54Z', '%Y-%m-%dT%H:%i:%sZ') AS end_time,\n    'arn:aws:iam::YOUR_ACCOUNT_ID:role/EMR_EC2_DefaultRole' AS ec2_role\n)\nSELECT\n  eventname,\n  count(*) AS request_count\nFROM \"SCHEMA\".\"YOUR_CT_TABLE_NAME\", app\nWHERE date_parse(eventtime, '%Y-%m-%dT%H:%i:%sZ') >= app.start_time\n  AND date_parse(eventtime, '%Y-%m-%dT%H:%i:%sZ') < app.end_time\n  AND useridentity.sessioncontext.sessionissuer.arn = app.ec2_role\n  AND errorcode = 'SlowDown'\nGROUP BY eventname\nORDER BY request_count DESC;\n"})}),"\n",(0,s.jsx)(t.p,{children:"These SQL queries are designed to analyze S3 requests and throttled requests from CloudTrail logs stored in an Athena table. Here's a breakdown of what each query does:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Get S3 Requests counts by S3 API name:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"This query retrieves the count of S3 events or API calls grouped by the eventname (which represents the S3 API operation name)."}),"\n",(0,s.jsxs)(t.li,{children:["It filters the events based on the following conditions:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"eventtime (the time when the event occurred) falls within a specific time range defined by the date_parse functions."}),"\n",(0,s.jsxs)(t.li,{children:["useridentity.sessioncontext.sessionissuer.arn matches the provided IAM role ARN used as EC2 Instance Role by the cluster analyzed (in this case, 'arn:aws:iam::YOUR_ACCOUNT_ID",":role","/EMR_EC2_DefaultRole')."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"The GROUP BY eventname clause groups the results by the S3 API operation name, allowing you to see the count of requests for each operation."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Get S3 Throttled Requests counts by S3 API name:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"This query is similar to the first one, but it specifically looks for throttled or rate-limited S3 requests by adding an additional filter condition: errorcode = 'SlowDown'."}),"\n",(0,s.jsx)(t.li,{children:"The SlowDown error code indicates that the request was throttled due to excessive rates."}),"\n",(0,s.jsx)(t.li,{children:"Like the previous query, it groups the results by the eventname (S3 API operation name) and counts the number of throttled requests for each operation."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'Both queries use the Athena table specified by "SCHEMA"."YOUR_CT_TABLE_NAME", which should be replaced with the actual schema and table name where your CloudTrail logs are stored.'}),"\n",(0,s.jsx)(t.p,{children:"Additionally, you need to replace 'YOUR_ACCOUNT_ID' with your actual AWS account ID in the IAM role ARN."}),"\n",(0,s.jsx)(t.p,{children:"These queries can help you analyze S3 usage patterns, identify frequently used S3 API, and detect potential bottlenecks or performance issues caused by throttled requests. By adjusting the time range and filtering conditions, you can analyze the data for different periods or specific roles/resources as needed."}),"\n",(0,s.jsx)(t.h2,{id:"s3-requests-visualization",children:"S3 requests visualization"}),"\n",(0,s.jsx)(t.p,{children:"The following queries are designed to extract data points from AWS CloudTrail logs, which can be used to generate visualizations and dashboards for monitoring and analyzing S3 requests made by a job running on EMR. By aggregating the request counts per second, you can gain insights into the patterns and potential bottlenecks in S3 access during the execution of an EMR job."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"-- Get S3 request count aggregated per second\nWITH app AS (\n  SELECT\n    date_parse('2024-06-04T14:39:56Z', '%Y-%m-%dT%H:%i:%sZ') AS start_time,\n    date_parse('2024-06-04T14:58:54Z', '%Y-%m-%dT%H:%i:%sZ') AS end_time,\n    'arn:aws:iam::YOUR_ACCOUNT_ID:role/EMR_EC2_DefaultRole' AS ec2_role\n)\nSELECT\n  eventtime,\n  count(*) AS request_count\nFROM \"SCHEMA\".\"YOUR_CT_TABLE_NAME\", app\nWHERE date_parse(eventtime, '%Y-%m-%dT%H:%i:%sZ') >= app.start_time\n  AND date_parse(eventtime, '%Y-%m-%dT%H:%i:%sZ') < app.end_time\n  AND useridentity.sessioncontext.sessionissuer.arn = app.ec2_role\nGROUP BY eventtime\nORDER BY eventtime;\n\n-- Get S3 throttled request count aggregated per second\nWITH app AS (\n  SELECT\n    date_parse('2024-06-04T14:39:56Z', '%Y-%m-%dT%H:%i:%sZ') AS start_time,\n    date_parse('2024-06-04T14:58:54Z', '%Y-%m-%dT%H:%i:%sZ') AS end_time,\n    'arn:aws:iam::YOUR_ACCOUNT_ID:role/EMR_EC2_DefaultRole' AS ec2_role\n)\nSELECT\n  eventtime,\n  count(*) AS request_count\nFROM \"SCHEMA\".\"YOUR_CT_TABLE_NAME\", app\nWHERE date_parse(eventtime, '%Y-%m-%dT%H:%i:%sZ') >= app.start_time\n  AND date_parse(eventtime, '%Y-%m-%dT%H:%i:%sZ') < app.end_time\n  AND useridentity.sessioncontext.sessionissuer.arn = app.ec2_role\n  AND errorcode = 'SlowDown'\nGROUP BY eventtime\nORDER BY eventtime;\n"})}),"\n",(0,s.jsx)(t.p,{children:"The first query retrieves the total count of S3 requests made by the EMR cluster within a specific time range, grouped by the event time (aggregated by second). This data can be used to create a line chart or time-series visualization, showing the overall S3 request volume over time."}),"\n",(0,s.jsx)(t.p,{children:"The second query focuses specifically on throttled S3 requests, where the error code 'SlowDown' was encountered. This query provides insights into periods when the EMR cluster experienced S3 throttling, which can occur when the request rate exceeds the service limits imposed by Amazon S3. By visualizing the throttled request counts over time, you can identify potential bottlenecks and take steps to adjust the S3 access patterns ."}),"\n",(0,s.jsxs)(t.p,{children:["To illustrate a practical example, consider the following visualization that depicts the behavior of job runs 9 and 10, highlighting the difference in how the respective EMRFS retry algorithms react to throttling events.\n",(0,s.jsx)(t.img,{src:n(9904).A+"",width:"2934",height:"996"}),"\nFigure 1. Exponential Backoff\n",(0,s.jsx)(t.img,{src:n(1115).A+"",width:"2934",height:"996"}),"\nFigure 2. AIMD Retry"]}),"\n",(0,s.jsx)(t.h2,{id:"alternative-approach---s3-analysis-using-yarn-container-logs",children:"Alternative Approach - S3 analysis using YARN Container Logs"}),"\n",(0,s.jsx)(t.p,{children:"As an alternative approach, you can enable Spark Debug Logs when launching an EMR cluster to include S3 call details in the YARN container logs. This can be achieved by setting the Spark rootLogger.level to debug and the logger.http.level to off in the spark-log4j2 classification."}),"\n",(0,s.jsx)(t.p,{children:"After running your Spark job, you can use the provided spark_s3_analyze.sh script to analyze the YARN container logs and retrieve various S3 metrics. The script downloads and decompresses the logs, calculates the application's elapsed time, counts the S3 requests by type, lists the input and output S3 paths with their sizes and displays the top 10 S3 requests per second."}),"\n",(0,s.jsx)(t.h2,{id:"emr-cluster-classification",children:"EMR Cluster Classification"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'[\n  {\n    "Classification": "spark",\n    "Properties": {\n      "maximizeResourceAllocation": "true"\n    }\n  },\n  {\n    "Classification": "spark-log4j2",\n    "Properties": {\n      "rootLogger.level": "debug",\n      "logger.http.name": "com.amazon.ws.emr.hadoop.fs.shaded.org.apache.http.wire",\n      "logger.http.level": "off"\n    }\n  }    \n]\n'})}),"\n",(0,s.jsx)(t.h2,{id:"spark_s3_analyzesh---script-to-analyze-yarn-container-logs-for-s3-details",children:"spark_s3_analyze.sh - Script to analyze YARN Container logs for S3 details"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'#!/bin/bash\n#===============================================================================\n#!# script: spark_s3_analyze.sh\n#!# version: v0.1\n#!#\n#!# Process Spark (YARN container\'s logs) to retrieve S3 metrics\n#===============================================================================\n#?#\n#?# usage: ./spark_s3_analyze.sh <S3_LOG> <S3_INPUT> <S3_OUTPUT>\n#?#\n#?#   S3_LOG              Amazon EMR S3 Log Path\n#?#   S3_INPUT            S3 path of the input data\n#?#   S3_OUTPUT           S3 path of the output data\n#?#\n#===============================================================================\nRED=\'\\033[0;31m\'\nNC=\'\\033[0m\'\n\ns3_logs="$1"\ninput_path="$2"\noutput_path="$3"\n\n# dowload and decompress logs\ntmp_path=$(mktemp -d)\ncd $tmp_path && aws s3 sync $s3_logs . \ngzip -d */*.gz\n\necho -e "# ${RED}Application Time${NC}\\n"\ncompleted=$(\n  grep -Ri "Final app status" *001/stderr | awk \'{split($0,a," "); print a[2]}\'\n)\nstarted=$(\n  grep -Ri "ApplicationAttemptId:" *001/stderr | awk \'{split($0,a," "); print a[2]}\'\n)\n\nstart=$(echo $started | awk -F: \'{ print ($1 * 3600) + ($2 * 60) + $3 }\')\nend=$(echo $completed | awk -F: \'{ print ($1 * 3600) + ($2 * 60) + $3 }\')\nduration=$(($end - $start))\nelapsed=$(TZ=UTC0 printf \'%(%H:%M:%S)T\\n\' $duration)\n\necho "Started   : $started"\necho "Completed : $completed"\necho "Elapsed   : $elapsed ($duration sec)"\necho\n\necho -e "# ${RED}Get S3 requests count${NC}\\n"\ngrep -Rh "Executing request" * | awk \'{split($0,a," "); print a[7]}\' | \\\n  sort | uniq -c\necho\n\necho -e "# ${RED}S3 Input Path${NC}\\n"\necho -e "Path: $input_path\\n"\naws s3 ls $input_path --recursive --summarize --human-readable | grep "Total" | \\\n  sed \'s/^ *//; s/ *$//; /^$/d\'\necho\necho -e "# ${RED}S3 Output Path${NC}\\n"\necho -e "Path: $output_path\\n"\naws s3 ls $output_path --recursive --summarize --human-readable | grep "Total" | \\\n  sed \'s/^ *//; s/ *$//; /^$/d\'\necho\n\necho -e "# ${RED}S3 Requests x second (${NC}Top 10${RED})${NC}\\n"\ngrep -Rh "Executing request" * | awk \'{split($0,a," "); print a[2]}\' | \\\n  sort | uniq -c | sort -n | tail -n 10\n  \ncd \nrm -rf $tmp_path\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3432:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/table-bfca38827dc50bd79c64d4194ccad659.png"},9904:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pic1-2dfa4e87cb2574dec10cc9b8be02658b.png"},1115:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pic2-773aa65933355a77c2786272e529d601.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);