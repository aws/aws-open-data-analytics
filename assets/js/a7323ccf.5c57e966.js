"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5457],{2512:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=s(5893),a=s(1151);const o={},i="Data Migration",r={id:"bestpractices/Applications/Hbase/data_migration",title:"Data Migration",description:"This document describes possible migrations paths you can follow when migrating data from an existing HBase cluster (e.g. on premise, or self-managed cluster on EC2) to Amazon EMR.",source:"@site/docs/bestpractices/5 - Applications/Hbase/data_migration.md",sourceDirName:"bestpractices/5 - Applications/Hbase",slug:"/bestpractices/Applications/Hbase/data_migration",permalink:"/aws-open-data-analytics/docs/bestpractices/Applications/Hbase/data_migration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bestpractices/5 - Applications/Hbase/data_migration.md",tags:[],version:"current",frontMatter:{},sidebar:"bestpractices",previous:{title:"Data Integrity / Disaster Recovery / High Availability",permalink:"/aws-open-data-analytics/docs/bestpractices/Applications/Hbase/data_integrity"},next:{title:"Management",permalink:"/aws-open-data-analytics/docs/bestpractices/Applications/Hbase/management"}},h={},l=[{value:"HBase snapshots",id:"hbase-snapshots",level:2},{value:"Snapshots with Incremental Export",id:"snapshots-with-incremental-export",level:2},{value:"Snapshots with HBase Replication",id:"snapshots-with-hbase-replication",level:2},{value:"Migrate HBase 1.x to HBase 2.x",id:"migrate-hbase-1x-to-hbase-2x",level:2},{value:"When using HDFS",id:"when-using-hdfs",level:3},{value:"When using Amazon S3",id:"when-using-amazon-s3",level:3},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"data-migration",children:"Data Migration"}),"\n",(0,n.jsx)(t.p,{children:"This document describes possible migrations paths you can follow when migrating data from an existing HBase cluster (e.g. on premise, or self-managed cluster on EC2) to Amazon EMR."}),"\n",(0,n.jsx)(t.h2,{id:"hbase-snapshots",children:"HBase snapshots"}),"\n",(0,n.jsx)(t.p,{children:"This is the most straight forward approach that doesn't require a complex setup and can easily be achieved using simple bash scripts. This approach is suitable if your data does not change frequently or when you can tolerate downtimes in your production systems to perform the data migration."}),"\n",(0,n.jsxs)(t.p,{children:["Below a list of steps that can be used to create a HBase Snapshot and transfer it to an Amazon S3 bucket. Please note that you can use the same approach to store snapshots on an HDFS cluster. If this is the case, replace the S3 target path in the following commands with the destination HDFS path (e.g. ",(0,n.jsx)(t.code,{children:"hdfs://NN_TARGET:8020/user/hbase"}),") where you want to store the snapshots."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Create a snapshot of a single HBase table"})}),"\n",(0,n.jsxs)(t.p,{children:["When creating a snapshot, it\u2019s good practice to also add an identifier in the snapshot name to have a reference date of when the snapshot was created. Before launching this command please replace the variable ",(0,n.jsx)(t.code,{children:"TABLE_NAME"})," with the corresponding table you want to generate the snapshot for. If the table is in a namespace different from ",(0,n.jsx)(t.code,{children:"default"})," use the following convention ",(0,n.jsx)(t.code,{children:"NAMESPACE:TABLE_NAME"}),". From the SOURCE cluster submit the following commands:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'DATE=`date +"%Y%m%d"`\nTABLE_NAME="YOUR_TABLE_NAME"\nhbase snapshot create -n "${TABLE_NAME/:/_}-$DATE" -t ${TABLE_NAME}\n'})}),"\n",(0,n.jsx)(t.p,{children:"To verify the snapshot just created, use the following command"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"hbase snapshot info -list-snapshots\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Copy the snapshot to an Amazon S3 bucket"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),"\nWhen migrating from an on premise cluster, make sure that you have Hadoop YARN installed in your cluster, as the commands rely on MR jobs to perform the copy to S3. Besides, you need to make sure that your Hadoop installation provides the ",(0,n.jsx)(t.a,{href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html",children:"hadoop-aws"})," module that is required to communicate with Amazon S3."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"})," If you're planning to use HBase with Amazon S3 as storage layer, you should use as ",(0,n.jsx)(t.code,{children:"TARGET_BUCKET"})," the same S3 path that will be used as HBase S3 Root Directory while launching the EMR cluster. This minimize copies on S3 that are required when restoring the snapshots, thus reducing the restore time of your tables. To avoid any conflict during the snapshot copy, you should not start the EMR cluster (if using Amazon S3 as storage layer) before the end of the snapshot copy."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'TARGET_BUCKET="s3://BUCKET/PREFIX/"\nhbase snapshot export -snapshot ${TABLE_NAME/:/_}-$DATE -copy-to $TARGET_BUCKET\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Restore Table when using Amazon S3 as storage layer for HBase"})}),"\n",(0,n.jsx)(t.p,{children:"If you followed the notes in the previous step, you'll find the snapshot already available in HBase after launching the cluster."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"})," If your snapshot was created from a namespace different from the ",(0,n.jsx)(t.code,{children:"default"})," one, make sure to pre create it, to avoid failures while restoring the snapshot. From the EMR master node:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'# Verify snapshot availability\nHBASE_CMD="sudo -u hbase hbase"\n$HBASE_CMD snapshot info -list-snapshots\n\n# Review snapshot info and details\nSNAPSHOT_NAME="YOUR_SNAPSHOT_NAME"\n$HBASE_CMD snapshot info -snapshot $SNAPSHOT_NAME -size-in-bytes -files -stats -schema\n\n# Optional - Create namespaces required by the snapshot\necho "create_namespace \\"$NAMESPACE_NAME\\"" | $HBASE_CMD shell\n\n# Restore table from snapshot\necho "restore_snapshot \\"$SNAPSHOT_NAME\\"" | $HBASE_CMD shell\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Scripts"})}),"\n",(0,n.jsx)(t.p,{children:"The following scripts allows you to migrate and restore HBase tables an namespaces using the snapshot procedure previously described."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(6346).Z+"",children:"Snapshot export"})," - Generate HBase snapshots for all the tables stored in all the namespaces, and copy them on an Amazon S3 bucket."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(8673).Z+"",children:"Snapshot import"})," - Restore all the snapshots stored in an Amazon S3 bucket."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"snapshots-with-incremental-export",children:"Snapshots with Incremental Export"}),"\n",(0,n.jsx)(t.p,{children:"This approach might help in those situations where you want to migrate your data but at the same time you cannot tolerate much downtime in your production system. This approach helps to perform an initial bulk migration using the HBase snapshot procedure previously described, and then reconcile data received after the HBase snapshot generating incremental exports from the SOURCE table."}),"\n",(0,n.jsx)(t.p,{children:"This approach works when the volume of ingested data is not high, as the procedure to reconcile the data in the DESTINATION cluster might require multiple iterations to synchronize the two clusters, along with the fact that might be error prone. The following highlights the overall migration procedure."}),"\n",(0,n.jsx)(t.p,{children:"In the SOURCE cluster:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create a snapshot of the HBase table you want to migrate. Collect the epoch time when the snapshot was taken, as this will be used to determine new data ingested in the cluster."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Export the snapshot on Amazon S3 ",(0,n.jsx)(t.code,{children:"org.apache.hadoop.hbase.snapshot.ExportSnapshot"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the DESTINATION cluster:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Import the snapshot in the cluster and restore the table"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the SOURCE cluster:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Generate an incremental export to S3 for data arrived in the cluster after taking the snapshot using the HBase utility ",(0,n.jsx)(t.code,{children:"org.apache.hadoop.hbase.mapreduce.Export"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the DESTINATION cluster:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Restore the missing data in the destination cluster using the HBase utility ",(0,n.jsx)(t.code,{children:"org.apache.hadoop.hbase.mapreduce.Import"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example Export Commands"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'## Configurations\nHBASE_CMD="sudo -u hbase hbase"\nBUCKET_NAME="YOUR_BUCKET_NAME"\nSNAPSHOT_PATH="s3://$BUCKET_NAME/hbase-snapshots/"\nTABLE_NAME="TestTable"\n\n# ==============================================================================\n# (Simulate) Create TestTable with 1000 rows\n# ==============================================================================\n$HBASE_CMD pe --table=$TABLE_NAME --rows=1000 --nomapred sequentialWrite 1\n\n# ==============================================================================\n# Take initial table snapshot and copy it to S3\n# ==============================================================================\nDATE=`date +"%Y%m%d"`\nEPOCH_MS=`date +%s%N | cut -b1-13`\nLABEL="$DATE-$EPOCH_MS"\n\n# snapshot creation\n# Note: HBase performs a FLUSH by default when creating a snapshot\n#       You can change this behaviour specifying the -s parameter\n$HBASE_CMD snapshot create -n "${LABEL}-${TABLE_NAME}" -t $TABLE_NAME\n\n# copy to S3\n$HBASE_CMD org.apache.hadoop.hbase.snapshot.ExportSnapshot -snapshot "${LABEL}-${TABLE_NAME}" -copy-to $SNAPSHOT_PATH\n\n# ==============================================================================\n# (Simulate) Data mutations to simulate data arrived after taking the snapshot\n# ==============================================================================\n# overwrite the first 100 elements of the table\n$HBASE_CMD pe --rows=100 --nomapred sequentialWrite 1\n# check first 100 rows will have an higher timestamp compared to the 101 element\necho "scan \'$TABLE_NAME\', {LIMIT => 101}" | $HBASE_CMD shell\n\n# ==============================================================================\n# Generate incremental data export\n# ==============================================================================\n# Retrieve the epoch time from the snapshot name that was previously created.\n# This allow us to only export data modified since that moment in time.\n$HBASE_CMD snapshot info -list-snapshots\n\n# Incremental updates\nLATEST_SNAPSHOT_EPOCH="$EPOCH_MS"\nNEW_EPOCH_MS=`date +%s%N | cut -b1-13`\nINCREMENTAL_PATH="s3://$BUCKET_NAME/hbase-delta/${TABLE_NAME}/${NEW_EPOCH_MS}"\n$HBASE_CMD org.apache.hadoop.hbase.mapreduce.Export ${TABLE_NAME} $INCREMENTAL_PATH 1 $LATEST_SNAPSHOT_EPOCH\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example Import Commands"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'## Configurations\nHBASE_CMD="sudo -u hbase hbase"\nBUCKET_NAME="YOUR_BUCKET_NAME"\nSNAPSHOT_PATH="s3://$BUCKET_NAME/hbase-snapshots/"\n\nHBASE_CONF="/etc/hbase/conf/hbase-site.xml"\nHBASE_ROOT=$(xmllint --xpath "//configuration/property/*[text()=\'hbase.rootdir\']/../value/text()" $HBASE_CONF)\n\n# ==============================================================================\n# Import and Restore HBase snapshot\n# ==============================================================================\n\n## List Snapshots on S3 and take note of the snapshot you want to restore\n$HBASE_CMD snapshot info -list-snapshots -remote-dir $SNAPSHOT_PATH\nSNAPSHOT_NAME="SNAPSHOT_NAME" # e.g. "20220817-1660726018359-TestTable"\n\n## Copy snapshot on the cluster\n$HBASE_CMD snapshot export \\\n    -D hbase.rootdir=$SNAPSHOT_PATH \\\n    -snapshot $SNAPSHOT_NAME \\\n    -copy-to $HBASE_ROOT\n\n# Restore initial snapshot\necho "restore_snapshot \'$SNAPSHOT_NAME\'" | $HBASE_CMD shell\n\n# ==============================================================================\n# Replay incremental updates\n# ==============================================================================\nTABLE_NAME=$(echo $SNAPSHOT_NAME | awk -F- \'{print $3}\')\nINCREMENTAL_PATH="s3://$BUCKET_NAME/hbase-delta/${TABLE_NAME}/${NEW_EPOCH_MS}"\n$HBASE_CMD org.apache.hadoop.hbase.mapreduce.Import ${TABLE_NAME} ${INCREMENTAL_PATH}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"snapshots-with-hbase-replication",children:"Snapshots with HBase Replication"}),"\n",(0,n.jsxs)(t.p,{children:["This approach describes how to migrate data using the ",(0,n.jsx)(t.a,{href:"https://hbase.apache.org/book.html#_cluster_replication",children:"HBase cluster replication"})," feature that allows you to establish a peering between two (or more) HBase clusters so that they can replicate incoming data depending on how the peering was established."]}),"\n",(0,n.jsxs)(t.p,{children:["In order to use this approach, a network connection between the SOURCE and DESTINATION cluster should be present. If you're transferring data from an on premise cluster and you have large volumes of data to replicate, you might establish the connection between the two clusters using ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/directconnect/",children:"AWS Direct Connect"})," or you can establish a VPN connection if this is a one time migration."]}),"\n",(0,n.jsx)(t.p,{children:"The below section highlight the overall procedure to establish the replication."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"In the SOURCE cluster, create a HBase peering with the DESTINATION cluster and then disable the peering so that data is accumulated in the HBase WALs."}),"\n",(0,n.jsx)(t.li,{children:"In the SOURCE cluster, take a snapshot of the table you want to migrate and export it to S3."}),"\n",(0,n.jsx)(t.li,{children:"In the DESTINATION cluster, import and restore the snapshot. This creates the metadata (table description) required for the replication and also restore the data present in the snapshot."}),"\n",(0,n.jsx)(t.li,{children:"In the SOURCE cluster, re-enable the HBase peering with the DESTINATION cluster, so that data modified up to that moment will start to be replicated in the DESTINATION cluster."}),"\n",(0,n.jsx)(t.li,{children:"Monitor the replication process from the HBase shell to verify the lag of replication before completely switch on the DESTINATION cluster, and shutdown the SOURCE cluster."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Create one-way peering: SOURCE \u2192 DESTINATION"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"})," The configuration for the replication should be enabled by default in HBase. To double check, verify ",(0,n.jsx)(t.code,{children:"hbase.replication"})," is set to true in the ",(0,n.jsx)(t.em,{children:"hbase-site.xml"})," in the SOURCE cluster."]}),"\n",(0,n.jsx)(t.p,{children:"To create the HBase peering, you need to know the DESTINATION ip or hostname of the node where the Zookeeper ensemble used by HBase is located. If the destination cluster is an Amazon EMR cluster this coincides with the EMR master node."}),"\n",(0,n.jsx)(t.p,{children:"Once collected this information, from the SOURCE cluster execute the following commands to enable the peering with the destination cluster and start accumulating new data in the HBase WALs:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'# The HBase command might be different in your Hadoop environment depending on\n# how HBase was installed and which user is used to properly launch the cli.\n# In most installations, it\'s sufficient to use the `hbase` command only.\nHBASE_CMD="sudo -u hbase hbase"\nMASTER_IP="**YOUR_MASTER_IP**" # e.g. ip-xxx-xx-x-xx.eu-west-1.compute.internal\nPEER_NAME="aws"\nTABLE_NAME="**YOUR_TABLE_NAME**"\n\n## Create peering with the destination cluster\necho "add_peer \'$PEER_NAME\', CLUSTER_KEY => \'$MASTER_IP:2181:/hbase\'" | $HBASE_CMD shell\n\n## List peers in the source cluster\necho "list_peers" | $HBASE_CMD shell\n\n## Disable the peer just created, so that we can keep new data in the LOG (HBase WALs) until the snapshots are restored in the DESTINATION cluster\necho "disable_peer \'$PEER_NAME\'" | $HBASE_CMD shell\n\n## enable replication for the tables to replicate\necho "enable_table_replication \'$TABLE_NAME\'" | $HBASE_CMD shell\n'})}),"\n",(0,n.jsx)(t.p,{children:"Now you can switch to the DESTINATION cluster and restore the initial snapshot taken for the table. Once the restore is complete, switch again on the SOURCE cluster and enable the HBase peering to start replicating new data ingested in the SOURCE cluster since the initial SNAPSHOT was taken."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'HBASE_CMD="sudo -u hbase hbase"\nPEER_NAME="aws"\necho "enable_peer \'$PEER_NAME\'" | $HBASE_CMD shell\n'})}),"\n",(0,n.jsxs)(t.p,{children:["To monitor the replication status you could use the hbase command ",(0,n.jsx)(t.strong,{children:"status 'replication'"})," from the HBase shell on the SOURCE cluster."]}),"\n",(0,n.jsx)(t.h2,{id:"migrate-hbase-1x-to-hbase-2x",children:"Migrate HBase 1.x to HBase 2.x"}),"\n",(0,n.jsx)(t.h3,{id:"when-using-hdfs",children:"When using HDFS"}),"\n",(0,n.jsx)(t.p,{children:"The migration path from HBase 1.x to HBase 2.x, can be accomplished using HBase snapshots if you're using HDFS as storage layer. In this case you can take a snapshot on the HBase 1.x cluster and then restore it on the HBase 2.x one. Although it is highly recommended to migrate to the latest version of HBase 1.4.x before migrating to HBase 2.x, it is still possible to migrate from older version of the 1.x branch (1.0.x, 1.1.x, 1.2.x, etc)."}),"\n",(0,n.jsx)(t.h3,{id:"when-using-amazon-s3",children:"When using Amazon S3"}),"\n",(0,n.jsxs)(t.p,{children:["If you're using Amazon S3 as storage layer for HBase, you can directly migrate any EMR cluster using an HBase version >= 1.x to an Amazon EMR release using HBase ",(0,n.jsx)(t.code,{children:"<= 2.2.x"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"})," If you try to update to a more recent version of HBase (e.g. HBase 2.4.4 from HBase 1.x), the HBase master will fail to correctly start due to some breaking changes in the way HBase load the meta table information in newest releases. You might see a similar error in your HMaster logs:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-log",children:"Caused by: org.apache.hadoop.hbase.ipc.RemoteWithExtrasException(org.apache.hadoop.hbase.regionserver.NoSuchColumnFamilyException): org.apache.hadoop.hbase.regionserver.NoSuchColumnFamilyException: Column family table does not exist in region hbase:meta,,1.1588230740 in table 'hbase:meta', {TABLE_ATTRIBUTES => {IS_META => 'true', coprocessor$1 => '|org.apache.hadoop.hbase.coprocessor.MultiRowMutationEndpoint|536870911|'}}, {NAME => 'info', VERSIONS => '3', KEEP_DELETED_CELLS => 'FALSE', DATA_BLOCK_ENCODING => 'NONE', TTL => 'FOREVER', MIN_VERSIONS => '0', REPLICATION_SCOPE => '0', BLOOMFILTER => 'NONE', IN_MEMORY => 'true', COMPRESSION => 'NONE', BLOCKCACHE => 'true', BLOCKSIZE => '8192', METADATA => {'CACHE_DATA_IN_L1' => 'true'}}\n    at org.apache.hadoop.hbase.regionserver.HRegion.checkFamily(HRegion.java:8685)\n    at org.apache.hadoop.hbase.regionserver.HRegion.getScanner(HRegion.java:3125)\n    at org.apache.hadoop.hbase.regionserver.HRegion.getScanner(HRegion.java:3110)\n"})}),"\n",(0,n.jsx)(t.p,{children:"In this case to migrate to the latest version, you can perform a two step migration:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"First, disable all your HBase tables in the Amazon EMR cluster using HBase 1.x. Once all the tables are disabled, terminate this cluster."}),"\n",(0,n.jsx)(t.li,{children:"Launch a new Amazon EMR cluster using EMR 6.3.0 as release and wait for all the tables/regions to be assigned. Once completed, disable all the tables again and shutdown the cluster."}),"\n",(0,n.jsx)(t.li,{children:"Finally, launch the latest EMR Version you want to use."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Approach"}),(0,n.jsx)(t.th,{children:"When to use?"}),(0,n.jsx)(t.th,{children:"Complexity"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Batch - HBase Snapshots"}),(0,n.jsx)(t.td,{children:"Data doesn't change frequently or when you can tolerate high service downtime"}),(0,n.jsx)(t.td,{children:"Easy"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Incremental - HBase Snapshots + Export"}),(0,n.jsx)(t.td,{children:"The data doesn't change frequently and you have large tables"}),(0,n.jsx)(t.td,{children:"Medium"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Online - HBase Snapshots + Replication"}),(0,n.jsx)(t.td,{children:"Data changes frequently and high service downtime cannot be tolerated"}),(0,n.jsx)(t.td,{children:"Advanced"})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},6346:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/files/hbase-snapshot-export-6c27b23a716f96e03afdf9707400bcc4.sh"},8673:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/files/hbase-snapshot-import-243cdedf77d2add9a5bdf82850c3e121.sh"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>i});var n=s(7294);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);