var homeUrl = "http://47.94.84.71/mallApp-1.0";

// 缓存中的常量
// 详情页id
var __goodsDetailId = "goodsDetailId";
var __isHaveAddress = "isHaveAddress";

// index界面中的数据对象
var __indexAllData = "__indexAllData";
var __indexPhoneData = "__indexPhoneData";
var __indexClothData = "__indexClothData";
var __indexJiajuData = "__indexJiajuData";
var __indexJiadianData = "__indexJiadianData";
var __indexFoodData = "__indexFoodData";
var __indexYundongData = "__indexYundongData";

var __historyLength = "__historyLength";
var __isSuccess = "__isSuccess";

// 分类界面中搜索的历史记录
var __searchHistory = "__searchHistory";
// 历史记录长度
var __searchHistoryLength = 30;

var __searchStr = "__searchStr";


// 地面店中的数据
var __groundData = "__groundData";



// 页面关闭  清空缓存中的数据
function clearStorateWhenPageClose(storageName) {
	document.addEventListener("visibilitychange", function() {
		localStorage.setItem(storageName, "");
	})
}

document.addEventListener("visibilitychange", function() {
		localStorage.setItem(__indexAllData, "");
		localStorage.setItem(__groundData, "");
		localStorage.setItem(__isSuccess , "");
})

// 从缓存中获取数据
function getItemFromlocalStorage(dataName) {
	return localStorage.getItem(dataName);
}

// 向缓存中设置数据
function setItemToLocalStorage(dataName , data){
	localStorage.setItem(dataName, data);
}

function myGet(urlPath, success) {
	mui.ajax(homeUrl + urlPath, {
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json'
		},
		success: function(data) {
			success(data);

		},
		error: function(err) {
			mui.toast("请求失败.....");
		}
	});
}

function myPost(urlPath, postData, successFn , errorFn) {
	
	
	
	mui.ajax(homeUrl+urlPath, {
		data: postData,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json'
		},
		success: function(data) {
			successFn(data);

		},
		error: function(err) {
			if (errorFn) {
				errorFn(err);
			}
			mui.toast("请求失败.....");
		}
	});

}