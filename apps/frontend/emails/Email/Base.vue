<script setup lang="ts">
import type { CSSProperties } from "vue/dist/vue";

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
} as CSSProperties;

const container = {
  width: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
} as CSSProperties;

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
} as CSSProperties;

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center",
} as CSSProperties;

const text = {
  margin: "0 0 10px 0",
  textAlign: "left",
} as CSSProperties;

const button = {
  backgroundColor: "rgb(56 189 248 / 1)",
  color: "#fff",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "0.5em",
  textTransform: "uppercase",
} as CSSProperties;

const links = {
  textAlign: "center",
} as CSSProperties;

const link = {
  color: "#0366d6",
  fontSize: "12px",
} as CSSProperties;

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center",
  marginTop: "60px",
} as CSSProperties;

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  // alignItems: "center", // This ensures vertical alignment in the middle
  backgroundColor: "#ffffff",
  padding: "10px 20px",
  borderBottom: "2px solid #f1f1f1",
} as CSSProperties;

const headerTitleStyle = {
  fontSize: "24px",
  color: "#666",
  float: "right",
  fontWeight: "bold",
  flexGrow: 1,
  textTransform: "uppercase",
  marginLeft: "15px",
} as CSSProperties;
</script>

<template>
  <ETailwind>
    <EBody :style="main">
      <EContainer :style="container">
        <EContainer :style="headerStyle">
          <EImg
            src="/void-logo.png"
            style="max-width: 32px; float: left; margin-top: 13px"
          />
          <EText :style="headerTitleStyle">VOID</EText>
        </EContainer>

        <ESection :style="section">
          <slot />
        </ESection>
        <EText :style="footer"> Void Asset Browser </EText>
      </EContainer>
    </EBody>
  </ETailwind>
</template>

<style scoped></style>
