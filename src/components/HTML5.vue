<template>
    <div>
        As a key component of any web application, we need to have a web page to be able to display informationand data to the end user. Regardless of the framework utilized for either front or back end utilizing HTML is a key component required for any web based application. Below you will find a listing of various links that you can use to help get up to snuff with your HTML 5 skills.
        <br />
        <v-divider></v-divider>
        <br />
        <v-toolbar dark>
            <v-toolbar-title>Training Links</v-toolbar-title>
        </v-toolbar>
        <v-expansion-panel>
            <v-expansion-panel-content
                v-for="item in items"
                :key="item.key"
            >
                <div slot="header"><b>{{item.title}}</b></div>
                <v-card>
                    <v-card-text>{{item.desc}}<br /><br />{{item.link}}</v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {key: 1, title: 'W3 Schools', desc: 'W3 Schools is a great working site that will help any level of experienced developer. This is a great resource for all that need to learn anew or to beef up with a refresher.', link: 'https://www.w3schools.com/html/default.asp'}
            ]
        }
    }
}
</script>
