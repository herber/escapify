import test from 'ava';
import escapify from './';

test('escape', t => {
  t.is(escapify.escape('<tag attr="text">&copy; \'str\'</tag>'), '&lt;tag attr=&quot;text&quot;&gt;&amp;copy; &#39;str&#39;&lt;/tag&gt;');
  t.is(escapify.escape('<&"\'>'), '&lt;&amp;&quot;&#39;&gt;');
  t.is(escapify.escape("&copy; 'str'"), '&amp;copy; &#39;str&#39;');
});

test('unescape', t => {
  t.is(escapify.unescape('&lt;tag attr=&quot;text&quot;&gt;&amp;copy; &#39;str&#39;&lt;/tag&gt;'), '<tag attr="text">&copy; \'str\'</tag>');
  t.is(escapify.unescape('&lt;&amp;&quot;&#39;&gt;'), '<&"\'>');
  t.is(escapify.unescape('&amp;copy; &#39;str&#39;'), "&copy; 'str'");
});

test('escape + unescape', t => {
  t.is(escapify.unescape(escapify.escape('<tag attr="text">&copy; \'str\'</tag>')), '<tag attr="text">&copy; \'str\'</tag>');
  t.is(escapify.unescape(escapify.escape('<&"\'>')), '<&"\'>');
  t.is(escapify.unescape(escapify.escape("&copy; 'str'")), "&copy; 'str'");
});
