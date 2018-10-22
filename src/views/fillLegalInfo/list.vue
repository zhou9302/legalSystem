<template>
    <div class="legalInfoList">
        <div class="title">历年情况</div>
        <div class="conditionBox">
            <div class="btn_blue fr" @click="fill">在线填报</div>
        </div>
        <div class="content">
            <el-table :data="tableData" border style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column type="index" label="序号" width="100" align="center">
                </el-table-column>
                <el-table-column prop="fillYear" label="填报年份" align="center">
                </el-table-column>
                <el-table-column prop="title" label="标题" align="center">
                </el-table-column>
                <el-table-column label="状态" width="180" align="center">
                    <template slot-scope="scope">
                        {{scope.row.status==0?'草稿':scope.row.status==1?'待查阅':scope.row.status==2?'已归档':scope.row.status==3?'不通过':'已回收'}}
                    </template>
                </el-table-column>
                <el-table-column prop="receiveTime" label="提交时间" align="center">
                </el-table-column>
                 <el-table-column label="地址" align="center">
                    <template slot-scope="scope">
                        <el-button  type="text" size="mini" @click="handleEdit(scope.$index, scope.row)" v-if="showBtn(scope.row.status)">修改</el-button>
                        <el-button type="text" size="mini"  @click="handleSubmit(scope.row.id)" v-if="showBtn(scope.row.status)">提交</el-button>
                        <el-button type="text" size="mini" v-if="!showBtn(scope.row.status)">下载详表</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import {getLegalInfoByOrg,submit} from 'api/fillLegalInfo'
import {table} from 'util/table.js';
export default {
    mixins:[table],
    data(){
        return{
            tableData: []
        }
    },
    created(){
        this.getLegalInfoByOrg()
        
    },
    methods:{
        async getLegalInfoByOrg(){
            try {
                let back=await getLegalInfoByOrg()
                back=back.data
                if(back.result==='1'){
                    this.tableData=back.datas
                }else{
                    this.$alert(back.msg,'提示')
                }
            } catch (error) {
                this.$alert(error,'提示')
            }
        },
        handleEdit(){
            this.$router.push({name:'infoForm'})
        },
        async handleSubmit(id){
            try {
                let back=await submit(id)
                back=back.data
                if(back.result==='1'){
                    this.getLegalInfoByOrg()
                    this.$alert('提交成功','提示')
                }else{
                    this.$alert(back.msg,'提示')
                }
            } catch (error) {
                this.$alert(error,'提示')
            }
        },
        showBtn(status){
            if(status===0||status==3||status===4){
                return true
            }else{
                return false
            }
        },
        fill(){
            this.$router.push({name:'infoForm'})
        }
    }
}
</script>
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
