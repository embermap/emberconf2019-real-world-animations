self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchId: "ember-views.event-dispatcher.jquery-event" },
    { handler: "silence", matchId: "ember-component.send-action" }
  ]
};
