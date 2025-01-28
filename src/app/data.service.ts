import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  removeItem: any;
  addItem: any;
  getCartItems(): any[] {
    throw new Error('Method not implemented.');
  }
  getRecommendedProducts(selectedCategory: string): any[] {
    throw new Error('Method not implemented.');
  }
  getFeatureProducts(selectedCategory: string): any[] {
    throw new Error('Method not implemented.');
  }
  
  constructor() {}

  
 public getind1() {
  return[
    {
      img: '../../assets/icon/swip.png',
      auto: 'Autum',
      col: 'Collection ',
      yer: '2022',
    },
    {
      img: '../../assets/icon/swip.png',
      auto: 'Autum',
      col: 'Collection ',
      yer: '2022',
    },
    {
      img: '../../assets/icon/swip.png',
      auto: 'Autum',
      col: 'Collection ',
      yer: '2022',
    },
    {
      img: '../../assets/icon/swip.png',
      auto: 'Autum',
      col: 'Collection ',
      yer: '2022',
    },
    {
      img: '../../assets/icon/swip.png',
      auto: 'Autum',
      col: 'Collection ',
      yer: '2022',
    },
    // Additiona
  ]
 }
  public getwomenProducts() {
    return[
      {
        img: '../../assets/icon/c6.png',
        lin: 'short Sweater',
        dol: '$ 39.99',
      },
      {
        img:'../../assets/icon/c8.png',
        lin:'Long sleve Dress',
        dol:'$ 45.99'
      },
      {
        img:'../../assets/icon/c5.png',
        lin:'Sportwear Set',
        dol:'$ 80.99'
      },
      {
        img:'../../assets/icon/c7.png',
        lin:'Elegant Dres',
        dol:'$ 75.99'
      },
      {
        img:'../../assets/icon/pic2.png',
        lin:'Long sleve Dress',
        dol:'$ 45.00'
      },
      {
        img:'../../assets/icon/pic1.png',
        lin:'Sportwear Set',
        dol:'$ 80.99'
      }
    ]
  }
  public getmenproducts() {
    return[
      {
        img: '../../assets/icon/pto.png',
        lin: 'pti lover t-shirt',
        dol: '$ 39.99',
      },
      {
        img:'../../assets/icon/the boy.jpg',
        lin:'the boys t-shirt',
        dol:'$ 45.99'
      },
      {
        img:'../../assets/icon/sum.jpg',
        lin:'Legend Traksuit',
        dol:'$ 80.99'
      },
      {
        img:'../../assets/icon/sm.jpg',
        lin:'summer Tracksuit',
        dol:'$ 75.99'
      },
      {
        img:'../../assets/icon/col.jpg',
        lin:'Comfiy Tracksuit ',
        dol:'$ 45.00'
      },
      {
        img:'../../assets/icon/ts.jpg',
        lin:'Amazing T-Shirt',
        dol:'$ 80.99'
      }
    ]
  }
  public getaccessoriesProducts() {
    return[
      {
        img: '../../assets/icon/rw.jpg',
        lin: 'Men luxury watch',
        dol: '$ 229.9',
      },
      {
        img:'../../assets/icon/lew.jpg',
        lin:'long wallet',
        dol:'$ 105.99'
      },
      {
        img:'../../assets/icon/jpr.jpg',
        lin:'J. perfume',
        dol:'$ 94.99'
      },
      {
        img:'../../assets/icon/rox.jpg',
        lin:'branded watch',
        dol:'$ 175.99'
      },
      {
        img:'../../assets/icon/cap.jpg',
        lin:'Men branded cap',
        dol:'$ 45.00'
      },
      {
        img:'../../assets/icon/br.jpg',
        lin:'luxury Bracelet',
        dol:'$ 180.99'
      }
    ]
  } 
  public getbeautyProducts() {
    return[
      {
        img: '../../assets/icon/wash.jpg',
        lin: ' Face Wash',
        dol: '$ 39.99',
      },
      {
        img:'../../assets/icon/kity.jpg',
        lin:'Makeup 7 Brush ',
        dol:'$ 45.99'
      },
      {
        img:'../../assets/icon/mak.jpg',
        lin:'Makeup poch',
        dol:'$ 80.99'
      },
      {
        img:'../../assets/icon/mdel.jpg',
        lin:'Makeup deal',
        dol:'$ 75.99'
      },
      {
        img:'../../assets/icon/lip.jpg',
        lin:'multi lip shiner',
        dol:'$ 45.00'
      },
      {
        img:'../../assets/icon/org.jpg',
        lin:'makeup orgnizer',
        dol:'$ 80.99'
      }
    ]
  }
  public getind11() {
 return[
  {
    img1: '../../assets/icon/second.png',
  },
  {
    img1: '../../assets/icon/second.png',
  },
  {
    img1: '../../assets/icon/second.png',
  },
  {
    img1: '../../assets/icon/second.png',
  },
  {
    img1: '../../assets/icon/second.png',
  },
 ]
  }
  public getind12() {
    return[
      {
        img2: '../../assets/icon/b1.png',
      },
      {
        img2: '../../assets/icon/b1.png',
      },
      {
        img2: '../../assets/icon/b1.png',
      },
      {
        img2: '../../assets/icon/b1.png',
      },
      {
        img2: '../../assets/icon/b1.png',
      },
      {
        img2: '../../assets/icon/b1.png',
      },
    ]
     }
     public getindb() {
      return[
        {
          imgc: '../../assets/icon/b3.png',
        },
        {
          imgc: '../../assets/icon/b4.png',
        },
        {
          imgc: '../../assets/icon/b3.png',
        },
        {
          imgc: '../../assets/icon/b4.png',
        },
      ]
     }
  public getind3() {
    return[
      {
        cardit:'../../assets/icon/cardit1.png',
      },
      {
        cardit:'../../assets/icon/cradit2.png',
      },
      {
        cardit:'../../assets/icon/cardit1.png',
      },
      {
        cardit:'../../assets/icon/cradit2.png',
      },
      {
        cardit:'../../assets/icon/cardit1.png',
      },
    
    ]
  }
  public getind2() {
    return[
      {
        sw1:'../../assets/icon/sw1.png',
      },
      {
        sw1:'../../assets/icon/sw2.png',
      },
      {
        sw1:'../../assets/icon/cw3.png',
      },
      {
        sw1:'../../assets/icon/cw4.png',
      },
    
    ]
  }
  public getindx() {
    return[
      {
        icon2:'heart-outline',
        img:'../../assets/icon/c1.png',
        lin:'Linen Dress',
        dol:'$ 52.00',
        dol1:'$ 90.00',
        img1:'../../assets/icon/star.png',
        tex:'(64)', 
        },
      
        {
          icon2:'heart-outline',
          img:'../../assets/icon/c2.png',
          lin:'Filted Waist Dress',
          dol:'$ 47.99',
          dol1:'$ 82.00',
          img1:'../../assets/icon/star.png',
          tex:'(53)',
        },
      
        {
          icon2:'heart-outline',
          img:'../../assets/icon/c3.png',
          lin:'Maxi Dress',
          dol:'$ 68.00',
          dol1:'$ 72.00',
          img1:'../../assets/icon/star.png',
          tex:'(46)',
        },
      
        {
          icon2:'heart-outline',
          img:'../../assets/icon/c4.png',
          lin:'Front Tie Mini Dress',
          dol:'$ 59.00',
          dol1:'$ 82.00',
          img1:'../../assets/icon/star.png',
          tex:'(38)',
        },
      
        {
          icon2:'heart-outline',
          img:'../../assets/icon/c5.png',
          lin:'Ohara Dress',
          dol:'$ 68.00',
          dol1:'$ 75.00',
          img1:'../../assets/icon/star.png',
          tex:'(46)',
        },
      
        {
          icon2:'heart-outline',
          img:'../../assets/icon/c6.png',
          lin:'Tie Back Mini Dress',
          dol:'$ 67.00',
          dol1:'$ 72.00',
          img1:'../../assets/icon/star.png',
          tex:'(39)',
        },
      
        {
          icon2:'heart-outline',
          img:'../../assets/icon/c7.png',
          lin:'Leaves Green Dress',
          dol:'$ 64.00',
          dol1:'$ 82.00',
          img1:'../../assets/icon/star.png',
          tex:'(83)',
        },
      
        {
          icon2:'heart-outline',
          img:'../../assets/icon/c8.png',
          lin:'Off shoulder Dress',
          dol:'$ 78.99',
          dol1:'$ 96.00',
          img1:'../../assets/icon/star.png',
          tex:'(25)',
        },
      
        {
      
          icon2:'heart-outline',
          img:'../../assets/icon/c3.png',
          lin:'Maxi Dress',
          dol:'$ 68.00',
          dol1:'$ 72.00',
          img1:'../../assets/icon/star.png',
          tex:'(46)',
        },
      
        {
          icon2:'heart-outline',
          img:'../../assets/icon/c1.png',
          lin:'Linen Dress',
          dol:'$ 52.00',
          dol1:'$ 90.00',
          img1:'../../assets/icon/star.png',
          tex:'(64)',
        },
      
        {
          icon2:'heart-outline',
          img:'../../assets/icon/c2.png',
          lin:'Filted Waist Dress',
          dol:'$ 47.99',
          dol1:'$ 82.00',
          img1:'../../assets/icon/star.png',
          tex:'(53)',
        },
      
        {
          icon2:'heart-outline',
          img:'../../assets/icon/c5.png',
          lin:'Ohara Dress',
          dol:'$ 68.00',
          dol1:'$ 75.00',
          img1:'../../assets/icon/star.png',
          tex:'(46)',
        }
    ]
    }
    public getindc() {
      return[
        {
          img:'../../assets/icon/sp1.png', 
        },
        {
          img:'../../assets/icon/sp2.png', 
        },
        {
          img:'../../assets/icon/sp3.png', 
        }
      ]
    }
    public getindk() {
      return[
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'2',
          pric:'110',
          pad:'PENDING',
          de:'Details',
        },
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'3',
          pric:'230',
          pad:'PENDING',
          de:'Details',
        },
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'4',
          pric:'230',
          pad:'PENDING',
          de:'Details',
        },
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'5',
          pric:'490',
          pad:'PENDING',
          de:'Details',
        } ,{
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'2',
          pric:'110',
          pad:'PENDING',
          de:'Details',
        },
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'3',
          pric:'230',
          pad:'PENDING',
          de:'Details',
        },
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'4',
          pric:'230',
          pad:'PENDING',
          de:'Details',
        },
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'5',
          pric:'490',
          pad:'PENDING',
          de:'Details',
        }
      ]
    }
    public getindh() {
      return[
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'2',
          pric:'110',
          pad:'DELIVERED',
          de:'Details',
        },
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'3',
          pric:'230',
          pad:'DELIVERED',
          de:'Details',
        },
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'4',
          pric:'230',
          pad:'DELIVERED',
          de:'Details',
        },
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'5',
          pric:'490',
          pad:'DELIVERED',
          de:'Details',
        }
      ]
    }
    public getindu() {
      return[
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'2',
          pric:'110',
          pad:'Cancelled',
          de:'Details',
        },
        {
          ord:'Order #1524',
          dat:'13/05/2021',
          trac:'Tracking number: ',
          ik:'IK287368838',
          qua:'Quanlity: ',
          sub:'Subtotal: ',
          digt:'3',
          pric:'230',
          pad:'Cancelled',
          de:'Details',
        },
      ]
    }
    public getindr() {
      return[
        {
          icon2:'heart-outline',
          img:'../../assets/icon/c1.png',
          lin:'Linen Dress',
          dol:'$ 52.00',
          dol1:'$ 90.00',
          img1:'../../assets/icon/star.png',
          tex:'(64)', 
          },
        
          {
            icon2:'heart-outline',
            img:'../../assets/icon/c2.png',
            lin:'Filted Waist Dress',
            dol:'$ 47.99',
            dol1:'$ 82.00',
            img1:'../../assets/icon/star.png',
            tex:'(53)',
          },
        
          {
            icon2:'heart-outline',
            img:'../../assets/icon/c3.png',
            lin:'Maxi Dress',
            dol:'$ 68.00',
            dol1:'$ 72.00',
            img1:'../../assets/icon/star.png',
            tex:'(46)',
          },
        
          {
            icon2:'heart-outline',
            img:'../../assets/icon/c4.png',
            lin:'Front Tie Mini Dress',
            dol:'$ 59.00',
            dol1:'$ 82.00',
            img1:'../../assets/icon/star.png',
            tex:'(38)',
          },
        
          {
            icon2:'heart-outline',
            img:'../../assets/icon/c5.png',
            lin:'Ohara Dress',
            dol:'$ 68.00',
            dol1:'$ 75.00',
            img1:'../../assets/icon/star.png',
            tex:'(46)',
          },
        
          {
            icon2:'heart-outline',
            img:'../../assets/icon/c6.png',
            lin:'Tie Back Mini Dress',
            dol:'$ 67.00',
            dol1:'$ 72.00',
            img1:'../../assets/icon/star.png',
            tex:'(39)',
          },
      ]
    }
    public getinda() {
      return[
        {
          wc:'../../assets/icon/wc1.png',
          gog:'Going out outfits',
          item:'36 items'
        },
        {
          wc:'../../assets/icon/wc2.png',
          gog:'Going out outfits',
          item:'36 items'
        },
        {
          wc:'../../assets/icon/wc1.png',
          gog:'Office Fashion',
          item:'20 items'
        }
      ]
    }
    public getindm() {
      return[
        {
          img:'../../assets/icon/yel.png',
      
        },
        {
          img:'../../assets/icon/cradit2.png',
          
        },
        {
          img:'../../assets/icon/cradit2.png',
          
        },
        {
          img:'../../assets/icon/cradit2.png',
          
        }
      ]
    }
    public getindv() {
      return[
        {
          img:'../../assets/icon/yel.png',
      
        },
        {
          img:'../../assets/icon/cradit2.png',
          
        },
        {
          img:'../../assets/icon/cradit2.png',
          
        },
        {
          img:'../../assets/icon/cradit2.png',
          
        }
      ]
    }
    public getindl() {
      return[
        {
          img:'../../assets/icon/p1.png',
          lin:'Lihua Tunic White',
          dol:'$ 53.00',
        },
        {
          img:'../../assets/icon/p2.png', 
          lin:'Skirt Dress',
          dol:'$ 34.00',
        },
        {
          img:'../../assets/icon/p3.png',
          lin:'Kimi Green Dress',
          dol:'$ 47.99',
        },
        {
          img:'../../assets/icon/p1.png',
          lin:'Lihua Tunic White',
          dol:'$ 53.00',
        },
        {
          img:'../../assets/icon/p2.png',
          lin:'Skirt Dress',
          dol:'$ 34.00',
        },
        {
          img:'../../assets/icon/p3.png',
          lin:'Kimi Green Dress',
          dol:'$ 47.99',
        },
      ]
    }
    public getindw() {
      return[
        {
          map: '../../assets/icon/mpic.png',
          tru: 'Turtleneck Sweater',
          price: 50,
          subtotal: 0,
          size: 'L',
          counter: 1,
          color: 'pink',
        },
        {
          map: '../../assets/icon/pic1.png',
          tru: 'Cotton-T-shirt',
          price: 40,
          subtotal: 0,
          size: 'M',
          counter: 1,
          color: 'white',
        },
        {
          map: '../../assets/icon/im2.png',
          tru: 'Turtleneck Sweater',
          price: 50,
          subtotal: 0,
          size: 'L',
          counter: 1,
          color: 'Black',
        },
        {
          map: '../../assets/icon/mpic.png',
          tru: 'Cotton-T-shirt',
          price: 40,
          subtotal: 0,
          size: 'M',
          counter: 1,
          color: 'pink',
        },
      ]
    }
}
