
        function ChatApp() {

            //TODO: Create the View
            //TODO: Post messages to the screen via user input
            //TODO: Delete messages when they are clicked on

            var _messages = [];

            function createView() {

                debugger;
                var messageViewer = document.createElement('div');
                messageViewer.id = 'viewer';

                var messageCreator = document.createElement('input');
                messageCreator.id = 'creator';
                messageCreator.addEventListener('keyup', this.addMessage, false);

                document.appendChild(messageViewer);
                document.appendChild(messageCreator);

                messageCreator.focus();
            }

            function addMessage() {
                var newMessageText = document.getElementById('creator').value;
                var newMessageId = Math.random();

                _messages.push({
                    id: newMessageId,
                    text: newMessageText
                });

                updateView();
            }

            function deleteMessage(e) {

                var messageId = e.target.id;

                console.log(messageId);

                updateView();
            }

            function updateView() {
                var viewer = document.getElementById('viewer');

                viewer.innerHTML = '';

                _messages.forEach(function(message){

                    var messageElement = document.createElement('p');

                    messageElement.id = message.id;
                    messageElement.innerText = message.text;
                    messageElement.addEventListener('click', this.deleteMessage, false);

                    viewer.appendChild(messageElement);
                }, this);
            }

            createView();
        }