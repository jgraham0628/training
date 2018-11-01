<template>
    <div id="app">
        <v-app id="training-page">
            <v-toolbar app>
                <v-toolbar-title>XYY Branch Training Page</v-toolbar-title>
            </v-toolbar>
            <v-navigation-drawer app 
                :mini-variant.sync="mini"
                v-model="drawer"
                hide-overlay
                stateless>
                <v-list class="pt-0" dense>
                    <v-divider></v-divider>
            
                    <v-list-tile
                        v-for="item in training_areas"
                        :key="item.name"
                    >
                        <v-list-tile-action>
                            <v-icon>mdi-{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>       
            </v-navigation-drawer>
            <v-content>
                <v-container fluid>
                    Hello World
                </v-container>
            </v-content>
            <v-footer></v-footer>
        </v-app>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mini: true,
            drawer: true,
            training_areas: [
                {name: 'HTML 5', icon: 'web'},
                {name: 'JavaScript and Vue JS', icon: 'vuejs'},
                {name: 'CSS Style Programming', icon: 'language-css3'},
                {name: 'Java EE Programming', icon: 'language-java'},
                {name: 'Java JAX-RS', icon: 'webhook'},
                {name: 'Java EJB', icon: 'database'},
                {name: 'Git Resources', icon: 'git'},
                {name: 'JBoss Configuration and Information', icon: 'server'},
                {name: 'ArcGIS Geospatial', icon: 'map-marker-multiple'},
                {name: 'Agile Process Training', icon: 'run-fast'},
                {name: 'Inovation Day Projects', icon: 'thought-bubble-outline'}
            ]
        };
    }
}
</script>
