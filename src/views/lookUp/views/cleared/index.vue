<template>
    <div class="legalInfoList">
        <div class="tabBox">
            <div v-for="items in tabOption" :key="items.value" :class="{selTab:items.value==tabValue}" @click="changeTab(items.value)">{{items.label}}</div>
        </div>
        <div class="headSearchBox">
            <el-form ref="form" :model="form" label-width="80px" label-position="left">
                <el-form-item label="填报年份">
                    <el-select v-model="form.value" placeholder="请选择">
                        <el-option key="2017" label="2017" value="'2017'"></el-option>
                        <el-option key="2018" label="2018" value="'2018'"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="集团名称">
                    <el-select v-model="form.value" placeholder="请选择">
                        <el-option key="2017" label="2017" value="'2017'"></el-option>
                        <el-option key="2018" label="2018" value="'2018'"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="查阅结果">
                    <el-select v-model="form.value" placeholder="请选择">
                        <el-option key="2017" label="2017" value="'2017'"></el-option>
                        <el-option key="2018" label="2018" value="'2018'"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div class="btnBox">
                <div>查询</div> 
            </div>
        </div>
        <div class="content">
            <el-table :data="tableData" border style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column type="index" label="序号" width="100" align="center">
                </el-table-column>
                <el-table-column prop="date" label="年份" align="center">
                </el-table-column>
                <el-table-column prop="name" label="集团名称" align="center">
                </el-table-column>
                <el-table-column prop="name" label="标题" width="180" align="center">
                </el-table-column>
                <el-table-column prop="address" label="接收时间" align="center">
                </el-table-column>
                 <el-table-column label="地址" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" size="mini">查阅</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            form:{
                name:'',
                value:''
            },
            tabOption:[
                {
                    label:'已查阅',
                    value:'hasCheck'
                },{
                    label:'已同意企业回收',
                    value:'hasAgree'
                }
            ],
            tabValue:'hasCheck'
        }
    },
    methods:{
        changeTab(val){
            this.tabValue=val
        },
        handleClick(){

        },
        tableRowClassName(row){
            if (row.rowIndex % 2 !== 0) {
                return 'warning-row';
            }
            return '';
        }
    }
}
</script>
<style lang="scss" scoped>
    .legalInfoList{
        padding:rem(20);
        .content{
            padding: 0 rem(20);
        }
        .headSearchBox{
            margin-top:rem(30);
            padding:0 rem(20);
        }
    }
</style>
