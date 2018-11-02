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
                        :to="item.link"
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
                    <router-view></router-view>
                </v-container>
            </v-content>
            <v-footer></v-footer>
        </v-app>
    </div>
</template>
<script>
export default {
    created() {
        // this.$panel.create({
        //     theme:       'primary',
        //     headerTitle: 'my panel #1',
        //     position:    'center-top 0 58',
        //     contentSize: '450 250',
        //     content:     '<p>Example panel ...</p>',
        //     callback: function () {
        //         this.content.style.padding = '20px';
        //     },
        //     onbeforeclose: function () {
        //         return confirm('Do you really want to close the panel?');
        //     }
        // });
    },
    data() {
        return {
            mini: true,
            drawer: true,
            training_areas: [
                {name: 'HTML 5', icon: 'web', link: '/train-html'},
                {name: 'JavaScript and Vue JS', icon: 'vuejs', link: '/test'},
                {name: 'CSS Style Programming', icon: 'language-css3', link: '/test'},
                {name: 'Java EE Programming', icon: 'language-java', link: '/test'},
                {name: 'Java JAX-RS', icon: 'webhook', link: '/test'},
                {name: 'Java EJB', icon: 'database', link: '/test'},
                {name: 'Git Resources', icon: 'git', link: '/test'},
                {name: 'JBoss Configuration and Information', icon: 'server', link: '/test'},
                {name: 'ArcGIS Geospatial', icon: 'map-marker-multiple', link: '/test'},
                {name: 'Agile Process Training', icon: 'run-fast', link: '/test'},
                {name: 'Inovation Day Projects', icon: 'thought-bubble-outline', link: '/test'}
            ]
        };
    }
}
</script>
