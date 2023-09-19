<template>
  <div>
    <ControlFrontEndPage />
    <!-- 演示1：组件方式 -->
    <el-card shadow="hover" header="演示1：组件方式" class="mt15">
      <el-row class="mb10" style="color: #808080">单个权限验证（:value="xxx"）：</el-row>
      <div class="flex-warp">
        <div v-if="hasPermission('btn.add')">
          <div class="flex-warp-item">
            <div class="flex-warp-item-box">
              <el-button type="primary" size="default">
                <el-icon>
                  <DocumentAdd />
                </el-icon>
                新增
              </el-button>
            </div>
          </div>
        </div>
        <div v-if="hasPermission('btn.edit')">
          <div class="flex-warp-item">
            <div class="flex-warp-item-box">
              <el-button type="info" size="default">
                <el-icon>
                  <Edit />
                </el-icon>
                编辑
              </el-button>
            </div>
          </div>
        </div>
        <div v-if="hasPermission('btn.del')">
          <div class="flex-warp-item">
            <div class="flex-warp-item-box">
              <el-button type="danger" size="default">
                <el-icon>
                  <Delete />
                </el-icon>
                删除
              </el-button>
            </div>
          </div>
        </div>
        <div v-if="hasPermission('btn.link')">
          <div class="flex-warp-item">
            <div class="flex-warp-item-box">
              <el-button type="success" size="default">
                <el-icon>
                  <Link />
                </el-icon>
                跳转
              </el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-warp">
        <ComAuth :value="'btn.add'">
          <div class="flex-warp-item">
            <div class="flex-warp-item-box">
              <el-button type="primary" size="default">
                <el-icon>
                  <DocumentAdd />
                </el-icon>
                新增
              </el-button>
            </div>
          </div>
        </ComAuth>
        <ComAuth :value="'btn.edit'">
          <div class="flex-warp-item">
            <div class="flex-warp-item-box">
              <el-button type="info" size="default">
                <el-icon>
                  <Edit />
                </el-icon>
                编辑
              </el-button>
            </div>
          </div>
        </ComAuth>
        <ComAuth :value="'btn.del'">
          <div class="flex-warp-item">
            <div class="flex-warp-item-box">
              <el-button type="danger" size="default">
                <el-icon>
                  <Delete />
                </el-icon>
                删除
              </el-button>
            </div>
          </div>
        </ComAuth>
        <ComAuth :value="'btn.link'">
          <div class="flex-warp-item">
            <div class="flex-warp-item-box">
              <el-button type="success" size="default">
                <el-icon>
                  <Link />
                </el-icon>
                跳转
              </el-button>
            </div>
          </div>
        </ComAuth>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import ControlFrontEndPage from '../page/index.vue'
import ComAuth from './component/ComAuth.vue'
import { hasPermission } from './hasPermission'
</script>

<style lang="scss" scoped></style>
