/**
* 初始化任务栏
* @param container 可有可无，任务栏所在容器（默认body）
* @param options配置 可有可无
* options: {
* 	position: 'right-bottom', // 可选值['left-top', 'right-top', 'right-bottom', 'left-bottom']，默认值'right-bottom'
* 	title: '任务栏标题',
* 	width: 400, // 任务栏宽度，默认400
* 	height: 200, // 任务栏高度，默认200,
* 	showCallback: function(){}, // 初始化任务栏显示后回调
* 	closeCallback: function(){}, // 点击关闭后回调
* 	content: $('<div>Hello World!</div>') // 任务栏内容，可为dom结点或字符串数据,
* 	contentStyle: 任务栏内容样式
* }
*
*/
function TaskBar($container, options){
	var _id = new Date().getTime();
	var opt = {};
	var position = {};
	var status = 'init'; // 当前状态 maximize：最大化，minimize：最小化，close：关闭隐藏

	if(!$container){	// 未传参
		$container = $('body');
	} else if(isDOMElement($container[0])){	// 仅传递一个参数dom容器
		$container = $container;
	} else if(typeof $container === 'object'){	// 仅传递option配置
		options = $container;
		$container = $('body');
	} else{
		$container = $('body');
	}

	// 容器中若已有任务栏则先销毁
	if($container.find('#' + _id).length){
		$container.find('#' + _id).remove();
	}

	// 初始化配置信息
	opt = $.extend({
		position: 'right-bottom',
		title: '任务栏',
		width: 400,
		height: 200,
		showCallback: null,
		closeCallback: null,
		content: '',
		contentStyle: {}
	}, options);

	// 任务栏默认位置:绝对布局,由于border大小为2，所以需要-4
	position = {
		'left-top': {	// 默认位置
			top: 0,
			left: 0
		},
		'right-top': {
			top: 0,
			left: (!$container.width() ? window.innerWidth : $container.width()) - opt.width - 4
		},
		'right-bottom': {
			top: (!$container.height() ? window.innerHeight : $container.height()) - opt.height - 4,
			left: (!$container.width() ? window.innerWidth : $container.width()) - opt.width - 4
		},
		'left-bottom': {
			top: (!$container.height() ? window.innerHeight : $container.height()) - opt.height - 4,
			left: 0
		}
	};

	var positionKeys = [];
	for(var key in position){
		positionKeys.push(key);
	}

	if(!position[opt.position]){
		throw new Error('属性position的值[' + opt.position + ']不存在，有效值为[' + positionKeys.join(",") + ']！');
	}

	// 显示最大化任务栏
	function maximize(callback){
		if(status === 'maximize') return false;
		// 任务栏不存在，先创建任务栏
		var	$taskBar = $container.find('#' + _id);
		$taskBar.find('.content').show();
		if(!$taskBar.length){
			_initTaskBar();
		} else{
			$taskBar.show();
			// 最大化动画
			$taskBar.animate($.extend({
				width: opt.width,
				height: opt.height
			}, position[opt.position]), 'fast', 'linear', function(){
				$taskBar.find('.scale-btn').attr('title', '最小化').removeClass('maximize-btn').addClass('minimize-btn');
				$taskBar.find('.scale-btn>.scale-img').attr('src', $taskBar.find('.scale-btn>.scale-img').attr('minimize-src'));

				if(status === 'minimize' && callback && typeof callback === 'function'){
					callback();
				}
				status = 'maximize';
			});
		}
	}

	// 最小化任务栏
	function minimize(callback){
		if(status === 'minimize' || status === 'close') return false;
		// 最小化宽带为标题宽带+按钮工具栏宽带
		var	$taskBar = $container.find('#' + _id);

		// 记录任务栏当前位置
		// position[opt.position].top = $('.task-bar')[0].style.top;
		// position[opt.position].left = $('.task-bar')[0].style.left;
		position[opt.position].top = $('#' + _id).css('top');
		position[opt.position].left = $('#' + _id).css('left');

		$taskBar.animate($.extend({
			width: $taskBar.find('.title').width() + $taskBar.find('.toolbar').width() + 10,
			height: 25
		},position[opt.position + '-min']), 'fast', 'linear', function(){
			$taskBar.find('.content').hide();
			$taskBar.find('.scale-btn').attr('title', '最大化').removeClass('minimize-btn').addClass('maximize-btn');
			$taskBar.find('.scale-btn>.scale-img').attr('src', $taskBar.find('.scale-btn>.scale-img').attr('maximize-src'));

			if(status === 'maximize' && callback && typeof callback === 'function'){
				callback();
			}
			status = 'minimize';
		});
	}

	// 关闭任务栏
	function close(callback){
		if(status === 'close') return false;
		$container.find('#' + _id).fadeOut();

		if(opt.closeCallback && typeof opt.closeCallback === 'function'){
			opt.closeCallback();
		}

		if(status !== 'close' && callback && typeof callback === 'function'){
			callback();
		}
		status = 'close';
	}

	// 初始化任务栏
	function _initTaskBar(){
		var $taskBar = $('<div id="' + _id + '" class="task-bar">'
			+ '<div class="header">'
				+ '<span class="title" title="' + opt.title + '">' + opt.title + '</span>'
				+ '<div id="toolbar" class="toolbar">'
					+ '<span title="最小化" class="btn scale-btn minimize-btn"><img class="scale-img" src="image/minimize.png" maximize-src="image/maximize.png" minimize-src="image/minimize.png" alt="最小化"/></span>'
					+ '<span title="关闭" class="btn close-btn"><img src="image/close.png" alt="关闭"/></span>'
				+ '</div>'
			+ '</div>'
			+ '<div class="content"></div>'
		+ '</div>');

		// 设置任务栏显示内容
		if(opt.content && isDOMElement(opt.content[0])){
			$taskBar.find('.content').append(opt.content);
		} else if(typeof opt.content === 'string'){
			$taskBar.find('.content').text(opt.content);
		}
		$taskBar.find('.content').css(opt.contentStyle);

		$taskBar.css($.extend(position[opt.position], {
			width: opt.width,
			height: opt.height
		}));
		$taskBar.appendTo($container);

		// 使任务栏可拖动
		$taskBar.draggable({
			containment: 'parent',
			handle: '.header',
			stop: function(){
				// 如果是最小化，则需记录拖动后的位置,点击最大化的时候直接在当前最大最大化（需计算最大化后位置不得超过容器边界）
				if($taskBar.find('.scale-btn').hasClass('maximize-btn')){
					position[opt.position].top = Number.parseInt($taskBar.css('top')) < $container.height() - opt.height - 4 ? Number.parseInt($taskBar.css('top')) : $container.height() - opt.height - 4;
					position[opt.position].left = Number.parseInt($taskBar.css('left')) < $container.width() - opt.width - 4 ? Number.parseInt($taskBar.css('left')) : $container.width() - opt.width - 4;
				}
			}
		});

		$taskBar.show('blind', {direction :'down'}, calcMinimizePosition);
		// 初始化按钮事件
		_initEvent();
	}

	// 弹窗初始化后计算最小化位置
	function calcMinimizePosition(){
		// 标题+工具栏按钮宽度
		var headerWidth = $container.find('#' + _id + ' .title').width() + $container.find('#' + _id + ' .toolbar').width() + 10;
		$.extend(position, {
			'left-top-min': {	// 最小化位置
				top: 0,
				left: 0
			},
			'right-top-min': {
				top: 0,
				left: (!$container.width() ? window.innerWidth : $container.width()) - headerWidth - 4
			},
			'right-bottom-min': {
				top: (!$container.height() ? window.innerHeight : $container.height()) - 25 - 4,
				left: (!$container.width() ? window.innerWidth : $container.width()) - headerWidth - 4
			},
			'left-bottom-min': {
				top: (!$container.height() ? window.innerHeight : $container.height()) - 25 - 4,
				left: 0
			}
		});

		// 窗体完全显示后回调
		if(opt.showCallback && typeof opt.showCallback === 'function'){
			opt.showCallback();
		}
	}

	// 初始化任务栏相关按钮事件
	function _initEvent(){
		var $toolbar = $container.find('#' + _id + ' .toolbar');

		// 点击最大化、最小化
		$toolbar.find('.scale-btn').click(function(){
			if($(this).hasClass('maximize-btn')){
				maximize();
			} else{
				minimize();
			}
		});

		// 点击关闭
		$toolbar.find('.close-btn').click(function(){
			close();
		});
	}

	// 判断是容器还是配置信息
	function isDOMElement(obj) {
		return !!(obj && typeof window !== 'undefined' && (obj === window || obj.nodeType));  
    }  

    maximize();

	return{
		/**
		 * 显示最大化任务栏
		 * @param  {Function} callback 回调函数
		 */
		maximize: function(callback){
			maximize(callback);
		},
		/**
		 * 最小化任务栏
		 * @param  {Function} callback 回调函数
		 */
		minimize: function(callback){
			minimize(callback);
		},
		/**
		 * 关闭任务栏
		 * @param  {Function} callback 回调函数
		 */
		close: function(callback){
			close(callback);
		},
		/**
		 * 获取当前任务栏
		 * @return {[type]} [description] 返回当前任务栏dom
		 */
		getTaskBar: function(){
			return $container.find('#' + _id);
		}
	}
}