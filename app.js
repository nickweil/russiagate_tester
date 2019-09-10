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
            {{date}} {{weekday}}
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