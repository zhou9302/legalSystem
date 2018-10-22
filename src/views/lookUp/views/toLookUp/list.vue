<template>
    <div class="legalInfoList">
        <div class="title">已填写集团</div>
        <div class="conditionBox">
            <div class="btn_blue fr">下载</div>
            <div class="btn_blue fr">同意企业回收</div>
            <div class="btn_blue fr" @click="toLookUpList()">批量查阅</div>
        </div>
        <div class="content">
            <el-table :data="tableData" border style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column type="index" label="序号" width="100" align="center">
                </el-table-column>
                <el-table-column prop="fillYear" label="年份" align="center">
                </el-table-column>
                <el-table-column prop="orgName" label="集团名称" align="center">
                </el-table-column>
                <el-table-column prop="title" label="标题" width="180" align="center">
                </el-table-column>
                <el-table-column prop="receiveTime" label="接收时间" align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" size="mini" @click="toLookUpList(scope.row.id)">查阅</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="pageSize"
                layout="sizes, prev, pager, next"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import {table,multipleTable,pagination} from 'util/table.js'
import {getLegalInfoForRefer} from 'api/lookUp/index.js'
export default {
    mixins:[table,multipleTable,pagination],
    data(){
        return{
            tableData: [],
            total:0
        }
    },
    created(){
        this.updateList()
    },
    methods:{
        async updateList(){
            let parm={
                pageNo:this.currentPage,
                pageSize:this.pageSize
            }
            try {
                let back=await getLegalInfoForRefer(parm)
                back = back.data
                if(back.result==='1'){
                    this.tableData=back.datas
                    this.total=back.totalNum
                }else{
                    this.$alert(back.msg,'提示')
                }
            } catch (error) {
                this.$alert('请求出错','提示')
                console.log(error)
            }
        },
        toLookUpList(id){
            if(id){
                this.$router.push({name:'lookUpList',query:{id:id}})
                return
            }
            if(this.multipleSelection.length===0){
                this.$alert('请先勾选要查阅的数据','提示')
                return 
            }
            let ids=[]
            this.multipleSelection.forEach(element => {
                ids.push(element.id)
            });
            this.$router.push({name:'lookUpList',query:{id:ids}})
        }
    }
}
</script>b
<style lang="scss" scoped>
    .legalInfoList{
        padding:rem(20);
        .title{
            width:100%;
            text-align: left;
            font-size:rem(18);
            color:#414c65;
        }
        .content{
            padding: 0 rem(20);
            margin-top:rem(40);
        }
    }
</style>
