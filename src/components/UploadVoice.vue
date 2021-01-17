<template>
  <v-app>
    <v-container fluid style="width: 600px">
      <div class="mb-5">
        <h1>qibao.ml</h1>
        <h2>Voice ARM File Upload</h2>
      </div>
      <div>
        <div v-if="currentFile">
          <div>
            <v-progress-linear
              v-model="progress"
              color="light-bule"
              height="25"
              reactive
            >
              <strong>{{ progress }}%</strong>
            </v-progress-linear>
          </div>
        </div>
        <v-row no-gutters justify="center" align="center">
          <v-col cols="8">
            <v-file-input
              show-size
              label="File Input"
              @change="selectFile"
            ></v-file-input>
          </v-col>

          <v-col cols="4" class="pl-2">
            <v-btn color="success" dark small @click="upload">Upload</v-btn>
          </v-col>
        </v-row>

        <v-alert v-if="message" border="left" color="bule-grey" dark>{{
          message
        }}</v-alert>

        <v-card v-if="fileInfos.length > 0" class="mx-auto">
          <v-list>
            <v-subheader>List of Files</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item v-for="(file, index) in fileInfos" :key="index">
                <a :href="file.url">{{ file.name }}</a>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import UploadVoiceService from "../services/UploadVoiceService";
export default {
  name: "upload-voice",
  data() {
    return {
      currenetFile: undefined,
      progress: 0,
      message: "",
      fileInfos: [
        {
          name: "first",
          url: "aksdu",
        },
      ],
    };
  },

  methods: {
    selectFile(file) {
      this.progress = 0;
      this.currenetFile = file;
    },
    upload() {
      if (!this.currenetFile) {
        this.message = "Please select a file!";
        return;
      }

      this.message = "";

      UploadVoiceService.uploadVoice(this.currenetFile, (event) => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then((response) => {
          this.message = response.data.message;
          return UploadVoiceService.getFiles();
        })
        .catch(() => {
          this.progress = 0;
          this.currenetFile = undefined;
          this.message = "Could not upload the file!";
        });
    },
  },
  mounted() {
    UploadVoiceService.getFiles().then((response) => {
      this.fileInfos = response.data;
    });
  },
};
</script>

<style></style>
