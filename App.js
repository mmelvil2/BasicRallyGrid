Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	launch: function () {
		console.log('launch');
		this._loadData();
	},
	// load rally data
	_loadData: function () {
		console.log('_loadData');
		var myStore = Ext.create('Rally.data.wsapi.Store', {
		model: 'User Story',
		autoLoad: true, // new in template?
		listeners: {
			load: function(myStore, myData, success) {
				//process data
				console.log('got data!', myStore, myData, success);
				this._loadGrid(myStore);
			},
			scope: this
		},
		fetch: ['FormattedID', 'Name', 'Owner', 'ScheduleState']
	});
	},
	// create grid using rally data store
	_loadGrid: function (gridStore) {
		console.log('_loadGrid');
		var myGrid = Ext.create('Rally.ui.grid.Grid', {//'Ext.Container', {
					store: gridStore,
					columnCfgs: [
						 'FormattedID',
						 'Name',
						 'Owner',
						 'ScheduleState'
					 ]
			 });
			 console.log('my grid', myGrid);
			 this.add(myGrid);
			 console.log('what is this?', this);
	}
}
);
