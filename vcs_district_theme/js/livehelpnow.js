window.lhnJsSdkInit = function () {
  lhnJsSdk.setup = {
    application_id: "e6ec795c-9f10-4d96-abbb-385d2e451044",
    application_secret: "BWD3Y6NLT59RYBPvSQ5Qg81CX5PS44ALO3dmen8dQw05yFyCZl"
  };
  lhnJsSdk.controls = [{
    type: "hoc",
    id: "3225c0ac-3b20-45ab-35e6-ee4d2c5eee96"
  }];
  lhnJsSdk.dictionary = {
    agentConnecting: "Connecting to agent",
    callbackMenu: "Callback",
    callbackTitle: "Request a callback",
    cancel: "Cancel",
    chatMenu: "Chat",
    chatTitle: "Conversation",
    email: "Email",
    endChat: "End Chat",
    endChatConfirm: "Are you sure you want to end the current chat?",
    inviteCancel: 'Dismiss',
    inviteStart: 'Chat now',
    knowledgeMenu: "FAQ",
    knowledgeTitle: "Search Knowledge",
    livechat: "LIVE CHAT",
    livechat_offline: "GET HELP",
    // livechat_offline: "VCS",
    newChatTitle: "New conversation",
    offlineTitle: "Leave a message",
    send: "Send",
    startChat: "Start Chat",
    submit: "Submit",
    surveyTitle: "Survey",
    ticketMenu: "Ticket",
    ticketTitle: "Submit a ticket"
  };
};
(function (d, s) {
  var newjs, lhnjs = d.getElementsByTagName(s)[0];
  newjs = d.createElement(s);
  newjs.src = "//developer.livehelpnow.net/js/sdk/lhn-jssdk-current.min.js";
  lhnjs.parentNode.insertBefore(newjs, lhnjs);
}(document, "script"));
