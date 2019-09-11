/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'texts',
  searchClient: algoliasearch('DTH6V8NWJ2', 'fd1f8a02a87cf784faf55a8a686700e7'),
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#batch-refinement',
    attribute: 'batch',
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#sender-refinement',
    attribute: 'sender',
  })
);

search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: '#range-slider',
    attribute: 'unixtimestamp',
    pips: false,
	tooltips: {
      format: function(rawValue) {
		var unix_timestamp = rawValue;
		var date = new Date(unix_timestamp*1000);
		var year = date.getFullYear().toString().substring(2);
		var month = date.getMonth()+1;
		var day = date.getDate();
		var convdate = month+'/'+day+'/'+year;
		return convdate;
      },
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
          <div class="text">
		    <img src="{{textimgurl}}" alt="{{contents}}" />
		  </div>
		  <div class="sender">
            <img src="{{senderimgurl}}" align="left" alt="{{sender}}" />
          </div>
          <div class="hit-name">
            {{date}}
          </div>
      `,
    },
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

search.start();