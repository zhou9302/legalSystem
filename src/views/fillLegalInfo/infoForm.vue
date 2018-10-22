<template>
    <div class="infoForm">
        <div class="title">法务人员机构及人员制度信息表</div>
        <el-form ref="form" :model="form" label-width="280px" class="form" label-position="left">
            <el-form-item label="填报年份" class="w350" required prop="fillYear">
                <el-input v-model="form.fillYear"></el-input>
            </el-form-item>
            <div class="type">
                <div class="typeTitle">总法律顾问设立情况</div>
                <el-form-item label="集团是否已设立总法律顾问" class="fl w350">
                    <el-select v-model="form.isSetLegalAdviser" placeholder="请选择">
                        <el-option key="0" label="未设立" value="0"></el-option>
                        <el-option key="1" label="已设立" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="总法律顾问制度是否在公司征程中予以明确" class="fl w350">
                    <el-select v-model="form.isClear" placeholder="请选择">
                        <el-option key="0" label="未明确" value="0"></el-option>
                        <el-option key="1" label="已确立" value="1"></el-option>
                    </el-select>
                </el-form-item>
            </div>
            <div class="type">
                <div class="typeTitle">总法律顾问基本情况</div>
                <el-form-item label="姓名" class="w350 fl">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" class="w350 fl">
                    <el-select v-model="form.gender" placeholder="请选择">
                        <el-option key="0" label="男" value="0"></el-option>
                        <el-option key="1" label="女" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="年龄" class="w350 fl clear">
                    <el-input v-model="form.age"></el-input>
                </el-form-item>
                <el-form-item label="职级或享受待遇" class="w350 fl">
                    <el-input v-model="form.treatment"></el-input>
                </el-form-item>
                <el-form-item label="是否专职" class="w350 fl clear">
                    <el-select v-model="form.isFullTime" placeholder="请选择">
                        <el-option key="0" label="否" value="0"></el-option>
                        <el-option key="1" label="是" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否持有法律职业资格证书或企业法律顾问证书" class="w350 fl">
                    <el-select v-model="form.haveCertificate" placeholder="请选择">
                        <el-option key="0" label="否" value="0"></el-option>
                        <el-option key="1" label="是" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="聘任时间" class="w350 fl clear" required>
                     <el-date-picker type="date" placeholder="选择日期" v-model="form.appointmentTime" style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="学历" class="w350 fl">
                    <el-select v-model="form.degree" placeholder="请选择">
                        <el-option key="0" label="博士及以上" value="0"></el-option>
                        <el-option key="1" label="硕士" value="1"></el-option>
                        <el-option key="2" label="本科" value="2"></el-option>
                        <el-option key="3" label="专科及以下" value="3"></el-option>
                    </el-select>
                </el-form-item>
            </div>
            <div class="type">
                <div class="typeTitle">总法律顾问工作情况</div>
                <el-form-item label="出具或审核法律意见书(件)" class="w350 fl">
                    <el-input v-model="form.opinionBooks"></el-input>
                </el-form-item>
                <el-form-item label="总法律顾问列席董事会(次)" class="w350 fl">
                    <el-input v-model="form.attendTimes"></el-input>
                </el-form-item>
            </div>
            <div class="type">
                <div class="typeTitle">集团法律事务机构和人员情况</div>
                <el-form-item label="集团是否建立独立的法律事务机构" class="w350 fl">
                    <el-select v-model="form.isSetIndependentLegalBody" placeholder="请选择">
                        <el-option key="0" label="否" value="0"></el-option>
                        <el-option key="1" label="是" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否开展公司律师试点" class="w350 fl">
                    <el-select v-model="form.isPilot" placeholder="请选择">
                        <el-option key="0" label="否" value="0"></el-option>
                        <el-option key="1" label="是" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="集团法律事务工作人员(个)" class="w350 fl clear">
                    <el-input v-model="form.groupLegalStaff"></el-input>
                </el-form-item>
                <el-form-item label="法律事务工作人员通过司法考试(个)" class="w350 fl">
                    <el-input v-model="form.groupPassExamStaff"></el-input>
                </el-form-item>
            </div>
            <div class="type">
                <div class="typeTitle">各级全资、控股、实际控制企业法律事务机构人员情况</div>
                <el-form-item label="法律事务工作人员拥有企业法律顾问资格(人)" class="w350 fl">
                    <el-input v-model="form.haveLegalCounsel"></el-input>
                </el-form-item>
                <el-form-item label="各级全资、控股、实际控制企业设立法律事务机构(户)" class="w350 fl">
                    <el-input v-model="form.companyLegalServices"></el-input>
                </el-form-item>
                <el-form-item label="法律事务工作人员(人)" class="w350 fl clear">
                    <el-input v-model="form.companyLegalStaff"></el-input>
                </el-form-item>
                <el-form-item label="法律事务工作人员通过司法考试(人)" class="w350 fl">
                    <el-input v-model="form.companyPassExamStaff"></el-input>
                </el-form-item>
            </div>
            <div class="type">
                <div class="typeTitle">各自全资、控股、实际控制企业法律事务机构人员情况</div>
                <el-form-item label="法律事务工作人员拥有法律顾问资格(人)" class="fl w350 clear">
                    <el-input v-model="form.passExamStaff"></el-input>
                </el-form-item>
                <el-form-item label="集团及各级全资、控股、实际控制企业法务人员取得研究生以上学历(人)" class="fl w350">
                    <el-input v-model="form.passExamStaffWithGraduate"></el-input>
                </el-form-item>
            </div>
            <div class="type">
                <div class="typeTitle">重大法律纠纷案件备案管理情况</div>
                <el-form-item label="是否制定重大法律纠纷案件管理办法" class="w350 fl">
                    <el-select v-model="form.isSetMajorCaseMethod" placeholder="请选择">
                        <el-option key="0" label="否" value="0"></el-option>
                        <el-option key="1" label="是" value="1"></el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item label="是否落实重大法律纠纷案件备案管理" class="w350 fl">
                    <el-select v-model="form.isRecordCaseWorkable" placeholder="请选择">
                        <el-option key="0" label="否" value="0"></el-option>
                        <el-option key="1" label="是" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="企业制定的重大法律纠纷案件管理制度中重大法律纠纷案件的标的(万元)"  class="fl w350 clear">
                    <el-input v-model="form.reachMajorCaseStandard"></el-input>
                </el-form-item>
                <el-form-item label="在董事会备案的重大法律纠纷案件总数(件/年)" class="fl w350">
                    <el-input v-model="form.recordCasesAtDirector"></el-input>
                </el-form-item>
            </div>
        </el-form>
        <!-- {{form}} -->
        <div class="submitBox">
            <div @click="saveDraft">暂存</div>
            <div class="btnBlue" @click="save">提交</div>
        </div>
    </div>
</template>
<script>
import {saveDraft,save} from 'api/fillLegalInfo'
import axios from 'axios'
export default {
    data(){
        return{
            form:{
                id:'',
                fillYear:'',
                isSetLegalAdviser:'0',
                isClear:'0',
                name:'',
                gender:'0',
                age:'',
                treatment:'',
                isFullTime:'0',
                haveCertificate:'0',
                appointmentTime:'',
                degree:'',
                opinionBooks:'',
                attendTimes:'',
                isSetIndependentLegalBody:'',
                isPilot:'',
                groupLegalStaff:'',
                groupPassExamStaff:'',
                haveLegalCounsel:'',
                companyLegalServices:'',
                companyLegalStaff:'',
                companyPassExamStaff:'',
                passExamStaff:'',
                passExamStaffWithGraduate:'',
                isSetMajorCaseMethod:'',
                reachMajorCaseStandard:'',
                isRecordCaseWorkable:'',
                recordCasesAtDirector:''
            }
        }
    },
    methods:{
        //保存草稿
        async saveDraft(){
            let data = await saveDraft(this.form)
            console.log(data)
           
        },
        //提交
        async save(){
           let data = await save(this.form)
            console.log(data)
        }
    }
}
</script>
<style lang="scss" scoped>
    .infoForm{
        @include wh(60%,100%);
        overflow: scroll;
        background: #fff;
        margin:0 auto;
        .title{
            font-size:rem(18);
            color:#414c65;
            text-align: left;
            padding-left:rem(21);
            padding-top:rem(25);
        }
        .form{
            padding:0 0 0 rem(70);
            margin-top:rem(20);
            .type{
                clear: both;
                .typeTitle{
                    font-size:rem(18);
                    color:#414c65;
                    text-align: left;
                    border-left:5px solid #5592ee;
                    text-indent: rem(10);
                    margin-bottom:rem(20);
                    margin-left:-30px;
                }
                .el-select,.el-input__inner{
                    float: left;
                }
                .el-form-item{
                    margin-right:rem(20);
                }
            }
        } 
        .submitBox{
            @include wh(100%,rem(50));
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                padding:rem(12) rem(37);
                background: #fff;
                border-radius: rem(2);
                font-size:rem(16);
                margin:0 rem(40);
                border:1px solid #bdc3d4;
            }
            .btnBlue{
                background: #5592ee;
                color:#fff;
                border:1px solid #5592ee;
            }
        }
    }
</style>
