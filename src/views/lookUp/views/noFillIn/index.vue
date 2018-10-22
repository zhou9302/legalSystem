<template>
    <div class="noFillList">
        <div class="title">未填写集团</div>
        <div class="countDown">距离填报截止日期还有：<span>3</span>天<span>15</span>小时</div>
        <div class="content">
            <el-table :data="tableData" border style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column type="index" label="序号" width="100" align="center">
                </el-table-column>
                <el-table-column prop="date" label="年份" align="center">
                </el-table-column>
                <el-table-column prop="orgName" label="集团名称" align="center">
                </el-table-column>
                <el-table-column prop="title" label="标题" width="180" align="center">
                </el-table-column>
                <el-table-column prop="name" label="集团联系人" align="center">
                </el-table-column>
                <el-table-column prop="phone" label="手机" align="center">
                </el-table-column>
                <el-table-column prop="telephone" label="固话" align="center">
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
import {getLegalInfoNotFilledOrg} from 'api/lookUp/index.js'
import {table,pagination} from 'util/table.js';
export default {
    mixins:[table,pagination],
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
                let back=await getLegalInfoNotFilledOrg(parm)
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
        }
    }
}
</script>
<style lang="scss" scoped>
    .noFillList{
        padding:rem(20);
        .title{
            width:100%;
            text-align: left;
            font-size:rem(18);
            color:#414c65;
        }
        .countDown{
            font-size:rem(18);
            text-align: left;
            padding-left:rem(20);
            margin-top:rem(20);
            span{
                color:red;
            }
        }
        .content{
            padding: 0 rem(20);
            margin-top:rem(40);
        }
    }
</style>
