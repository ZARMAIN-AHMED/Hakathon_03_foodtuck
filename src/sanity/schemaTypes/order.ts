
export default {
  name: "order",
   type: "document",
   title: "Order",
  fields: [
    {
        name:'firstName',
        title: 'First Name',
        type: 'string'


    },
    {
        name:'lastName',
        title: 'Last Name',
        type :'string',

    },
    {
        
        name:'address',
        title: 'Address',
        type: 'string'

    },
    {
        
        name:'city',
        title: 'City',
        type: 'string'

    },
    {
        
        name:'company',
        title: 'Company',
        type: 'string'

    }, {
        
        name:'country',
        title: 'Country',
        type: 'string'

    },
    {
        
        name:'zipcode',
        title: 'Zip Code',
        type: 'string'

    },
    {
        
        name:'phone',
        title: 'Phone',
        type: 'string'

    },
    {
        
        name:'email',
        title: 'Email',
        type: 'string'

    },
    {
        
        name:'cartitems',
        title: 'Cart Items',
        type: 'array',
        of :[{ type : 'reference' , to : { type : 'product'}}]

    },
    {
        
        name:'total',
        title: 'Total',
        type: 'number',

    },
    {
        
        name:'status',
        title: 'Order Status',
        type: 'string',
        Options :{
            list :[
                { title: 'pending' , value : 'pending'},
                { title: 'Sucess' , value : 'sucess'},
                { title: 'Dispactch' , value : 'dispatch'},

            ],
            layout : 'radio'
        },
        initialValue : 'pending'

    },
    


  ]
    
  }