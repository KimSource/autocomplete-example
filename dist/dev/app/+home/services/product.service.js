"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ProductService = (function () {
    function ProductService() {
        this.products = [
            {
                name: 'CPU',
                items: [
                    {
                        id: 10942,
                        name: '인텔 코어i5-6세대 6600 (스카이레이크) (정품)',
                        price: 302700,
                        description: '3.3GHz',
                        popularity: 97841
                    },
                    {
                        id: 10765,
                        name: '인텔 코어i7-6세대 6700 (스카이레이크) (정품)',
                        price: 429550,
                        description: '3.4GHz',
                        popularity: 84566
                    },
                    {
                        id: 10167,
                        name: '인텔 코어i7-6세대 6700K (스카이레이크) (정품)',
                        price: 484140,
                        description: '4.0GHz',
                        popularity: 78424
                    },
                    {
                        id: 10875,
                        name: '인텔 코어i3-6세대 6100 (스카이레이크) (정품)',
                        price: 151390,
                        description: '3.7GHz',
                        popularity: 69472
                    },
                    {
                        id: 10489,
                        name: '인텔 코어i5-6세대 6500 (스카이레이크) (정품)',
                        price: 267500,
                        description: '3.2GHz',
                        popularity: 57945
                    }
                ]
            },
            {
                name: '메인보드',
                items: [
                    {
                        id: 20154,
                        name: 'ASUS B150M-A/M.2 iBORA',
                        price: 91880,
                        description: 'B150',
                        popularity: 78451
                    },
                    {
                        id: 20479,
                        name: 'ASRock H110M-HDV 에즈윈',
                        price: 78500,
                        description: 'H110',
                        popularity: 67591
                    },
                    {
                        id: 20641,
                        name: 'MSI H110M PRO-VD PLUS',
                        price: 70410,
                        description: 'H110',
                        popularity: 57214
                    },
                    {
                        id: 20644,
                        name: 'ASRock B150M PRO4 에즈윈',
                        price: 97500,
                        description: 'B150',
                        popularity: 49715
                    },
                    {
                        id: 20148,
                        name: 'GIGABYTE GA-B150M-DS3H 듀러블에디션 피씨디렉트',
                        price: 89700,
                        description: 'B150',
                        popularity: 37914
                    }
                ]
            },
            {
                name: '메모리',
                items: [
                    {
                        id: 30564,
                        name: '삼성전자 DDR4 8G PC4-17000 (정품)',
                        price: 42230,
                        description: 'PC4-17000',
                        popularity: 97543
                    },
                    {
                        id: 30279,
                        name: 'ESSENCORE KLEVV DDR4 8G PC4-17000 CL15 (8Gx1)',
                        price: 42000,
                        description: 'PC4-17000',
                        popularity: 87468
                    },
                    {
                        id: 30941,
                        name: '삼성전자 DDR3 8G PC3-12800 (정품)',
                        price: 37170,
                        description: 'PC3-12800',
                        popularity: 74687
                    },
                    {
                        id: 30649,
                        name: 'ESSENCORE KLEVV DDR3 8G PC3-12800 CL9 NEO (4Gx2)',
                        price: 39900,
                        description: 'PC3-12800',
                        popularity: 67122
                    },
                    {
                        id: 30541,
                        name: '삼성전자 DDR3 4G PC3-12800 (정품)',
                        price: 19010,
                        description: 'PC3-12800',
                        popularity: 58715
                    }
                ]
            },
            {
                name: '그래픽카드',
                items: []
            },
            {
                name: 'SSD',
                items: []
            },
            {
                name: '하드디스크',
                items: []
            },
            {
                name: '파워',
                items: []
            }
        ];
    }
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUszQztJQUdFO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxFQUFFLEVBQUUsS0FBSzt3QkFDVCxJQUFJLEVBQUUsZ0NBQWdDO3dCQUN0QyxLQUFLLEVBQUUsTUFBTTt3QkFDYixXQUFXLEVBQUUsUUFBUTt3QkFDckIsVUFBVSxFQUFFLEtBQUs7cUJBQ2xCO29CQUNEO3dCQUNFLEVBQUUsRUFBRSxLQUFLO3dCQUNULElBQUksRUFBRSxnQ0FBZ0M7d0JBQ3RDLEtBQUssRUFBRSxNQUFNO3dCQUNiLFdBQVcsRUFBRSxRQUFRO3dCQUNyQixVQUFVLEVBQUUsS0FBSztxQkFDbEI7b0JBQ0Q7d0JBQ0UsRUFBRSxFQUFFLEtBQUs7d0JBQ1QsSUFBSSxFQUFFLGlDQUFpQzt3QkFDdkMsS0FBSyxFQUFFLE1BQU07d0JBQ2IsV0FBVyxFQUFFLFFBQVE7d0JBQ3JCLFVBQVUsRUFBRSxLQUFLO3FCQUNsQjtvQkFDRDt3QkFDRSxFQUFFLEVBQUUsS0FBSzt3QkFDVCxJQUFJLEVBQUUsZ0NBQWdDO3dCQUN0QyxLQUFLLEVBQUUsTUFBTTt3QkFDYixXQUFXLEVBQUUsUUFBUTt3QkFDckIsVUFBVSxFQUFFLEtBQUs7cUJBQ2xCO29CQUNEO3dCQUNFLEVBQUUsRUFBRSxLQUFLO3dCQUNULElBQUksRUFBRSxnQ0FBZ0M7d0JBQ3RDLEtBQUssRUFBRSxNQUFNO3dCQUNiLFdBQVcsRUFBRSxRQUFRO3dCQUNyQixVQUFVLEVBQUUsS0FBSztxQkFDbEI7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxFQUFFLEVBQUUsS0FBSzt3QkFDVCxJQUFJLEVBQUUsd0JBQXdCO3dCQUM5QixLQUFLLEVBQUUsS0FBSzt3QkFDWixXQUFXLEVBQUUsTUFBTTt3QkFDbkIsVUFBVSxFQUFFLEtBQUs7cUJBQ2xCO29CQUNEO3dCQUNFLEVBQUUsRUFBRSxLQUFLO3dCQUNULElBQUksRUFBRSxzQkFBc0I7d0JBQzVCLEtBQUssRUFBRSxLQUFLO3dCQUNaLFdBQVcsRUFBRSxNQUFNO3dCQUNuQixVQUFVLEVBQUUsS0FBSztxQkFDbEI7b0JBQ0Q7d0JBQ0UsRUFBRSxFQUFFLEtBQUs7d0JBQ1QsSUFBSSxFQUFFLHVCQUF1Qjt3QkFDN0IsS0FBSyxFQUFFLEtBQUs7d0JBQ1osV0FBVyxFQUFFLE1BQU07d0JBQ25CLFVBQVUsRUFBRSxLQUFLO3FCQUNsQjtvQkFDRDt3QkFDRSxFQUFFLEVBQUUsS0FBSzt3QkFDVCxJQUFJLEVBQUUsdUJBQXVCO3dCQUM3QixLQUFLLEVBQUUsS0FBSzt3QkFDWixXQUFXLEVBQUUsTUFBTTt3QkFDbkIsVUFBVSxFQUFFLEtBQUs7cUJBQ2xCO29CQUNEO3dCQUNFLEVBQUUsRUFBRSxLQUFLO3dCQUNULElBQUksRUFBRSxxQ0FBcUM7d0JBQzNDLEtBQUssRUFBRSxLQUFLO3dCQUNaLFdBQVcsRUFBRSxNQUFNO3dCQUNuQixVQUFVLEVBQUUsS0FBSztxQkFDbEI7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxFQUFFLEVBQUUsS0FBSzt3QkFDVCxJQUFJLEVBQUUsNkJBQTZCO3dCQUNuQyxLQUFLLEVBQUUsS0FBSzt3QkFDWixXQUFXLEVBQUUsV0FBVzt3QkFDeEIsVUFBVSxFQUFFLEtBQUs7cUJBQ2xCO29CQUNEO3dCQUNFLEVBQUUsRUFBRSxLQUFLO3dCQUNULElBQUksRUFBRSwrQ0FBK0M7d0JBQ3JELEtBQUssRUFBRSxLQUFLO3dCQUNaLFdBQVcsRUFBRSxXQUFXO3dCQUN4QixVQUFVLEVBQUUsS0FBSztxQkFDbEI7b0JBQ0Q7d0JBQ0UsRUFBRSxFQUFFLEtBQUs7d0JBQ1QsSUFBSSxFQUFFLDZCQUE2Qjt3QkFDbkMsS0FBSyxFQUFFLEtBQUs7d0JBQ1osV0FBVyxFQUFFLFdBQVc7d0JBQ3hCLFVBQVUsRUFBRSxLQUFLO3FCQUNsQjtvQkFDRDt3QkFDRSxFQUFFLEVBQUUsS0FBSzt3QkFDVCxJQUFJLEVBQUUsa0RBQWtEO3dCQUN4RCxLQUFLLEVBQUUsS0FBSzt3QkFDWixXQUFXLEVBQUUsV0FBVzt3QkFDeEIsVUFBVSxFQUFFLEtBQUs7cUJBQ2xCO29CQUNEO3dCQUNFLEVBQUUsRUFBRSxLQUFLO3dCQUNULElBQUksRUFBRSw2QkFBNkI7d0JBQ25DLEtBQUssRUFBRSxLQUFLO3dCQUNaLFdBQVcsRUFBRSxXQUFXO3dCQUN4QixVQUFVLEVBQUUsS0FBSztxQkFDbEI7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUUsRUFBRTthQUNWO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxFQUFFO2FBQ1Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBbkpIO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFvSmIscUJBQUM7QUFBRCxDQW5KQSxBQW1KQyxJQUFBO0FBbkpZLHNCQUFjLGlCQW1KMUIsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcm9kdWN0Q2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdC1jYXRlZ29yeS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XG4gIHByb2R1Y3RzOiBQcm9kdWN0Q2F0ZWdvcnlbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2R1Y3RzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnQ1BVJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTA5NDIsXG4gICAgICAgICAgICBuYW1lOiAn7J247YWUIOy9lOyWtGk1LTbshLjrjIAgNjYwMCAo7Iqk7Lm07J2066CI7J207YGsKSAo7KCV7ZKIKScsXG4gICAgICAgICAgICBwcmljZTogMzAyNzAwLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICczLjNHSHonLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogOTc4NDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMDc2NSxcbiAgICAgICAgICAgIG5hbWU6ICfsnbjthZQg7L2U7Ja0aTctNuyEuOuMgCA2NzAwICjsiqTsubTsnbTroIjsnbTtgawpICjsoJXtkogpJyxcbiAgICAgICAgICAgIHByaWNlOiA0Mjk1NTAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzMuNEdIeicsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA4NDU2NlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwMTY3LFxuICAgICAgICAgICAgbmFtZTogJ+yduO2FlCDsvZTslrRpNy027IS464yAIDY3MDBLICjsiqTsubTsnbTroIjsnbTtgawpICjsoJXtkogpJyxcbiAgICAgICAgICAgIHByaWNlOiA0ODQxNDAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzQuMEdIeicsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA3ODQyNFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwODc1LFxuICAgICAgICAgICAgbmFtZTogJ+yduO2FlCDsvZTslrRpMy027IS464yAIDYxMDAgKOyKpOy5tOydtOugiOydtO2BrCkgKOygle2SiCknLFxuICAgICAgICAgICAgcHJpY2U6IDE1MTM5MCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnMy43R0h6JyxcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDY5NDcyXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTA0ODksXG4gICAgICAgICAgICBuYW1lOiAn7J247YWUIOy9lOyWtGk1LTbshLjrjIAgNjUwMCAo7Iqk7Lm07J2066CI7J207YGsKSAo7KCV7ZKIKScsXG4gICAgICAgICAgICBwcmljZTogMjY3NTAwLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICczLjJHSHonLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogNTc5NDVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICfrqZTsnbjrs7Trk5wnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyMDE1NCxcbiAgICAgICAgICAgIG5hbWU6ICdBU1VTIEIxNTBNLUEvTS4yIGlCT1JBJyxcbiAgICAgICAgICAgIHByaWNlOiA5MTg4MCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQjE1MCcsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA3ODQ1MVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIwNDc5LFxuICAgICAgICAgICAgbmFtZTogJ0FTUm9jayBIMTEwTS1IRFYg7JeQ7KaI7JyIJyxcbiAgICAgICAgICAgIHByaWNlOiA3ODUwMCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSDExMCcsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA2NzU5MVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIwNjQxLFxuICAgICAgICAgICAgbmFtZTogJ01TSSBIMTEwTSBQUk8tVkQgUExVUycsXG4gICAgICAgICAgICBwcmljZTogNzA0MTAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0gxMTAnLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogNTcyMTRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyMDY0NCxcbiAgICAgICAgICAgIG5hbWU6ICdBU1JvY2sgQjE1ME0gUFJPNCDsl5DspojsnIgnLFxuICAgICAgICAgICAgcHJpY2U6IDk3NTAwLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCMTUwJyxcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDQ5NzE1XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMjAxNDgsXG4gICAgICAgICAgICBuYW1lOiAnR0lHQUJZVEUgR0EtQjE1ME0tRFMzSCDrk4Drn6zruJTsl5DrlJTshZgg7ZS87JSo65SU66CJ7Yq4JyxcbiAgICAgICAgICAgIHByaWNlOiA4OTcwMCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQjE1MCcsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiAzNzkxNFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+uplOuqqOumrCcsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMwNTY0LFxuICAgICAgICAgICAgbmFtZTogJ+yCvOyEseyghOyekCBERFI0IDhHIFBDNC0xNzAwMCAo7KCV7ZKIKScsXG4gICAgICAgICAgICBwcmljZTogNDIyMzAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BDNC0xNzAwMCcsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA5NzU0M1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMwMjc5LFxuICAgICAgICAgICAgbmFtZTogJ0VTU0VOQ09SRSBLTEVWViBERFI0IDhHIFBDNC0xNzAwMCBDTDE1ICg4R3gxKScsXG4gICAgICAgICAgICBwcmljZTogNDIwMDAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BDNC0xNzAwMCcsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA4NzQ2OFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMwOTQxLFxuICAgICAgICAgICAgbmFtZTogJ+yCvOyEseyghOyekCBERFIzIDhHIFBDMy0xMjgwMCAo7KCV7ZKIKScsXG4gICAgICAgICAgICBwcmljZTogMzcxNzAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BDMy0xMjgwMCcsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA3NDY4N1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMwNjQ5LFxuICAgICAgICAgICAgbmFtZTogJ0VTU0VOQ09SRSBLTEVWViBERFIzIDhHIFBDMy0xMjgwMCBDTDkgTkVPICg0R3gyKScsXG4gICAgICAgICAgICBwcmljZTogMzk5MDAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BDMy0xMjgwMCcsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA2NzEyMlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMwNTQxLFxuICAgICAgICAgICAgbmFtZTogJ+yCvOyEseyghOyekCBERFIzIDRHIFBDMy0xMjgwMCAo7KCV7ZKIKScsXG4gICAgICAgICAgICBwcmljZTogMTkwMTAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BDMy0xMjgwMCcsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA1ODcxNVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+q3uOuemO2Uvey5tOuTnCcsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NTRCcsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+2VmOuTnOuUlOyKpO2BrCcsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+2MjOybjCcsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBnZXRQcm9kdWN0cygpOlByb2R1Y3RDYXRlZ29yeVtdIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0cztcbiAgfVxufVxuIl19
