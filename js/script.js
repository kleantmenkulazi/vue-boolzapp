const { createApp } = Vue

createApp({

    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '17/04/2024 18:39:45',
                            message: 'Stasera esci con noi ?',
                            status: 'sent'
                        },
                        {
                            date: '17/04/2024 19:55:00',
                            message: 'Ci sono anche Giulia e Virginia',
                            status: 'sent'
                        },
                        {
                            date: '17/04/2024 20:05:02',
                            message: 'Ti faccio risapere !',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/05/2024 19:00:00',
                            message: 'Ti va di bere qualcosa ?',
                            status: 'sent'
                        },
                        {
                            date: '20/05/2024 20:23:45',
                            message: 'Potrei esserci! a che ore vuoi fare ?',
                            status: 'received'
                        },
                        {
                            date: '20/05/2024 20:39:30',
                            message: 'Non lo so, probabilmente dopo cena',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'Hai finito i compiti ?',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'No, li faccio appena torno a casa',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Mi racommando!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '13/06/2024 17:40:15',
                            message: 'Comunque alla fine ho comprato la macchina nuova!',
                            status: 'sent'
                        },
                        {
                            date: '13/06/2024 17:40:55',
                            message: 'Mandami subito una foto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '17/07/2024 15:37:43',
                            message: 'We, alla fine stasera non vengo, mi spiace',
                            status: 'sent'
                        },
                        {
                            date: '17/07/2020 15:55:35',
                            message: 'Va bien, non ti preoccupare',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '19/08/2024 00:10:27',
                            message: 'Mi sa che ti sei dimenticata le cuffie in macchina mia!',
                            status: 'sent'
                        },
                        {
                            date: '19/08/2024 00:10:40',
                            message: 'Cavolo, quelle nere col filo ?',
                            status: 'received'
                        },
                        {
                            date: '19/08/2024 00:11:04',
                            message: 'Quelle, ora siamo costretti a rivederci!',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '../img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '04/09/2024 11:35:07',
                            message: 'Buongiorno, volevo sapere se il mio preventivo è pronto',
                            status: 'sent'
                        },
                        {
                            date: '04/09/2024 11:43:43',
                            message: 'Salve, sì lo invieremo alla mail fornita',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '05/09/2024 19:17:30',
                            message: 'Ciao amore della nonna come stai ?',
                            status: 'received'
                        },
                        {
                            date: '05/09/2024 19:25:30',
                            message: 'Nonna! tutto bene, tu invece ?',
                            status: 'sent'
                        },
                        {
                            date: '05/09/2024 19:27:33',
                            message: 'tutto ok, hai mangiato ?',
                            status: 'received'
                        }
                    ],
                }
            ],

            
            activeContactI: 0,

            
            inputMsg: '',

        }
    },

    methods: {
        send() {
            if (this.inputMsg.trim() ) {

                
                this.contacts[this.activeContactI].messages.push({
                    date: "ciao",
                    message: this.inputMsg,
                    status: 'sent'
                });

                
                this.inputMsg = ''

                
                setTimeout(() => {
                    this.contacts[this.activeContactI].messages.push({
                        date: this.nowDate(),
                        message: 'Ok (:',
                        status: 'received'
                    });
                }, 1000);
            }
        },
    }


}).mount('#app')