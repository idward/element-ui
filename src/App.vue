<template>
    <div id="app">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-button type="success">成功按钮</el-button>
        <el-button :plain="true" type="success">成功按钮</el-button>
        <el-button type="primary" icon="edit">成功按钮</el-button>
        <el-button type="primary"><i class="el-icon-search"></i> 搜索</el-button>
        <el-button type="primary">上传 <i class="el-icon-upload"></i></el-button>

        <el-button-group>
            <el-button type="primary" icon="edit"></el-button>
            <el-button type="primary" icon="share"></el-button>
            <el-button type="primary" icon="delete"></el-button>
        </el-button-group>

        <el-button type="primary" :loading="true">加载中</el-button>
    </div>
</template>

<script type="text/javascript">
    export default {}
</script>

<style lang="scss">
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>