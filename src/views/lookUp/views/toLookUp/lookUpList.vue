<template>
    <div class="muchFieldTable lookUpTable">
        <div class="backBtn" @click="backToList">返回</div>
        <el-table
            ref="multipleTable"
            :data="tableData3"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            :row-class-name="tableRowClassName">
            <el-table-column
            type="selection"
            width="50" fixed="left">
            </el-table-column>
            <el-table-column
            label="集团名称"
            width="50" fixed="left">
            </el-table-column>
            <el-table-column label="总法律顾问设立情况">
                <el-table-column label="集团是否已设立总法律顾问">
                    <template slot-scope="scope">
                        {{scope.row.isSetLegalAdviser===0?'否':'是'}}
                    </template>
                </el-table-column>
                <el-table-column label="总法律顾问制度是否在公司章程中予以明确">
                    <template slot-scope="scope">
                        {{scope.row.isClear===0?'否':'是'}}
                    </template>
                </el-table-column>
            </el-table-column>
             <el-table-column label="总法律顾问基本情况">
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column label="性别">
                    <template slot-scope="scope">
                        {{scope.row.gender===0?'男':'女'}}
                    </template>
                </el-table-column>
                <el-table-column prop="age" label="年龄" ></el-table-column>
                <el-table-column prop="treatment" label="职级或享受待遇" ></el-table-column>
                <el-table-column label="是否专职">
                    <template slot-scope="scope">
                        {{scope.row.isFullTime===0?'否':'是'}}
                    </template>
                </el-table-column>
                <el-table-column prop="haveCertificate" label="是否持有法律职业资格证书或企业法律顾问证书">
                    <template slot-scope="scope">
                        {{scope.row.haveCertificate===0?'否':'是'}}
                    </template>
                </el-table-column>
                <el-table-column prop="appointmentTime" label="聘任时间"></el-table-column>
                <el-table-column label="学历">
                    <template slot-scope="scope">
                        {{scope.row.degree===0?'博士':scope.row.degree===1?'硕士':scope.row.degree===2?'本科':'专科及以下'}}
                    </template>
                </el-table-column>
            </el-table-column>
            <el-table-column label="总法律顾问工作情况">
                <el-table-column prop="opinionBooks" label="出具或审核法律意见书"></el-table-column>
                <el-table-column prop="attendTimes" label="总法律顾问列席董事会"></el-table-column>
            </el-table-column>
            <el-table-column label="集团法律事务机构和人员情况">
                <el-table-column label="集团是否建立独立的法律事务机构">
                    <template slot-scope="scope">
                        {{scope.row.isSetIndependentLegalBody===0?'否':'是'}}
                    </template>
                </el-table-column>
                <el-table-column label="是否开展公司律师试点">
                    <template slot-scope="scope">
                        {{scope.row.isPilot===0?'否':'是'}}
                    </template>
                </el-table-column>
                <el-table-column prop="groupLegalStaff" label="集团法律事务工作人员人数" ></el-table-column>
                <el-table-column prop="groupPassExamStaff" label="集团法律事务工作人员通过司法考试人数" ></el-table-column>
            </el-table-column>
            <el-table-column label="各级全资、控股、实际控制企业法律事务机构人员情况">
                <el-table-column prop="haveLegalCounsel" label="企业法律事务工作人员拥有企业法律顾问资格"></el-table-column>
                <el-table-column prop="companyLegalServices" label="各级全资、控股、实际控制企业设立法律事务机构户数"></el-table-column>
                <el-table-column prop="companyLegalStaff" label="企业法律事务工作人员数" ></el-table-column>
                <el-table-column prop="companyPassExamStaff" label="企业法律事务工作人员通过司法考试人数" ></el-table-column>
            </el-table-column>
            <el-table-column label="法务人员学历情况">
                <el-table-column prop="passExamStaff" label="法律事务工作人员拥有企业法律顾问资格"></el-table-column>
                <el-table-column prop="passExamStaffWithGraduate" label="集团及各级全资、控股、实际控制企业法务人员取得研究生以上学历"></el-table-column>
            </el-table-column>
            <el-table-column label="重大法律纠纷案件备案管理情况">
                <el-table-column label="是否制定重大法律纠纷案件管理办法">
                    <template slot-scope="scope">
                        {{scope.row.isSetMajorCaseMethod===0?'否':'是'}}
                    </template>
                </el-table-column>
                <el-table-column prop="reachMajorCaseStandard" label="企业制定的重大法律纠纷案件管理制度中重大法律纠纷案件达标的,单位:万元"></el-table-column>
                <el-table-column label="是否落实重大法律纠纷案件备案管理">
                    <template slot-scope="scope">
                        {{scope.row.isRecordCaseWorkable===0?'否':'是'}}
                    </template>
                </el-table-column>
                <el-table-column prop="recordCasesAtDirector" label="在董事会备案的重大法律纠纷案件总数"></el-table-column>
            </el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
        </el-table>
    </div>
</template>
<script>
import {getLegalInfoListByIds} from 'api/lookUp/index.js'
import {table,multipleTable} from 'util/table.js'
export default {
    mixins:[table,multipleTable],
    data(){
        return{
            tableData3: [],
            // multipleSelection:[]
        }
    },
    created(){
        console.log(this.$route.query)
        this.getLegalInfoListByIds()
    },
    methods:{
        backToList(){
            this.$router.push({name:'lookList'})
        },
        async getLegalInfoListByIds(){
             try {
                let back=await getLegalInfoListByIds(this.$route.query.id)
                back = back.data
                if(back.result==='1'){
                    this.tableData3=back.datas
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
<style scoped lang="scss">
    .lookUpTable{
        padding:rem(30)
    }
    .backBtn{
        font-size:rem(14);
        padding:rem(10) rem(30);
        float: left;
        color:white;
        background: #5592ee;
        border-radius: rem(3);
        margin-bottom:rem(15);
    }
</style>
