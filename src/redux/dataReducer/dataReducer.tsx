import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configStore";
import axios from "axios";
import { uuid } from "uuidv4";
import moment from "moment";
import { gql } from 'apollo-boost';
import { client } from "../..";
import { ObservableQuery } from "@apollo/react-hooks";
import emailjs from 'emailjs-com';
const { v4: uuidv4 } = require("uuid");


// Define a type for the slice state

interface arrUser {
  representative_email: string,
  user_type: string,
  user_name: string,
  first_name: string,
  last_name: string,
  dob: string,
  nationaly: string,
}
interface dataHome {
  locationFrom: string;
  locationTo: string;
  numberNguoiLon: any,
  numberTreEm: any,
  numberEmbe: any,
  startDate: string;
  returnDate: string;
  seatCls: string;

  name_flight: string | any,
  price: string;
  depature_airport: string | any;
  arrival_airport: string | any;
  depature_time: string | any;
  arrival_time: string | any;
  flight_create_at: string | any;
  flight_update_at: string | any;
  flight_status: string | any;
  fligth_type: string | any;

  name_flight_retunr: string | any,
  price_retunr: string;
  depature_airport_retunr: string | any;
  arrival_airport_retunr: string | any;
  depature_time_retunr: string | any;
  arrival_time_retunr: string | any;
  flight_create_at_retunr: string | any;
  flight_update_at_retunr: string | any;
  flight_status_retunr: string | any;
  fligth_type_retunr: string | any;

  // priceReturn: number | any;
  // depature_airportReturn: string;
  // departureTimeReturn: string;
  // landTimeReturn: string;

  firstNameContact: string;
  lastNameContact: string;
  phoneNumberContact: string | number;
  emailContact: string;

  nameUser: string;
  firstNameUser: string;
  lastNameUser: string;
  dobUser: string;
  nationalyUser: string;

  // mang user
  arrInfoUser: any;

  test: string;

  // new
  // api_key
  id_api_key: string;
  payment_name: string;
  create_at: string;
  update_at: string;
}

// Define the initial state using that type
const initialState: dataHome = {
  locationFrom: "",
  locationTo: "",
  startDate: "",
  returnDate: "",
  numberNguoiLon: '',
  numberTreEm: '',
  numberEmbe: '',
  seatCls: "",

  // chuyến đi
  name_flight: '',
  price: "0",
  depature_airport: "",
  arrival_airport: "",
  depature_time: "",
  arrival_time: "",
  flight_create_at: moment().format("DD/MM/YYYY"),
  flight_update_at: "",
  flight_status: "",
  fligth_type: "",
  // Chuyến về
  name_flight_retunr: '',
  price_retunr: "0",
  depature_airport_retunr: "",
  arrival_airport_retunr: "",
  depature_time_retunr: "",
  arrival_time_retunr: "",
  flight_create_at_retunr: moment().format("DD/MM/YYYY"),
  flight_update_at_retunr: "",
  flight_status_retunr: "",
  fligth_type_retunr: "",

  firstNameContact: "",
  lastNameContact: "",
  phoneNumberContact: "",
  emailContact: "",

  nameUser: "",
  firstNameUser: "",
  lastNameUser: "",
  dobUser: "",
  nationalyUser: "",


  arrInfoUser: '',

  test: "success",

  // new
  // api_key
  id_api_key: "",
  payment_name: "",
  create_at: "",
  update_at: "",
};



export const dataHomeReducer = createSlice({
  name: "dataHome",

  initialState,
  reducers: {
    getDataReducer: (state, action: PayloadAction<any>) => {
      // console.log('state', state.locationFrom)

      const {
        locationFrom,
        locationTo,
        startDate,
        retunrDate,
        numberNguoiLon,
        numberTreEm,
        numberEmbe,
        seatCls,
        // price,
        // depature_airport,
        // arrival_airport,
        // depature_time,
        // arrival_time,
        // create_at,
        // update_at,
        // flight_status,
      } = action.payload;
      // console.log('data', action.payload)
      state.locationFrom = locationFrom;
      state.locationTo = locationTo;
      state.startDate = startDate;
      state.returnDate = retunrDate;
      state.numberNguoiLon = numberNguoiLon;
      state.numberTreEm = numberTreEm;
      state.numberEmbe = numberEmbe;
      state.seatCls = seatCls;
      // state.price = price;
      // state.depature_airport = depature_airport;
      // state.arrival_airport = arrival_airport;
      // state.depature_time = depature_time;
      // state.arrival_time = arrival_time;
      // state.create_at = create_at;
      // state.update_at = update_at;
      // state.flight_status = flight_status;

      console.log('data home', seatCls)
    },
    dataFromFlightReducer: (state, action: any) => {

      // console.log('state', state.locationFrom)
      const {
        name_flight,
        price,
        fligth_type,
        depature_airport,
        arrival_airport,
        depature_time,
        arrival_time,
        flight_create_at,
        flight_update_at,
        flight_status,
      } = action.payload;
      // console.log('data', action.payload)

      state.name_flight = name_flight;
      state.price = price;
      state.fligth_type = fligth_type;
      state.depature_airport = depature_airport;
      state.arrival_airport = arrival_airport;
      state.depature_time = depature_time;

      state.arrival_time = arrival_time;
      state.flight_create_at = flight_create_at;
      state.flight_update_at = flight_update_at;
      state.flight_status = flight_status;

      console.log('state2', state.numberNguoiLon, state.numberTreEm, state.numberEmbe)
    },
    dataFromFlightReturnReducer: (state, action: any) => {
      // console.log('state', state.locationFrom)
      const {
        name_flight_return,
        price_return,
        fligth_type_return,
        depature_airport_return,
        arrival_airport_return,
        depature_time_return,
        arrival_time_return,
        flight_create_at_return,
        flight_update_at_return,
        flight_status_return

      } = action.payload;
      // console.log('data', action.payload)

      state.name_flight_retunr = name_flight_return;
      state.price_retunr = price_return;
      state.fligth_type_retunr = fligth_type_return;
      state.depature_airport_retunr = depature_airport_return;
      state.arrival_airport_retunr = arrival_airport_return;

      state.depature_time_retunr = depature_time_return;
      state.arrival_time_retunr = arrival_time_return;
      state.flight_create_at_retunr = flight_create_at_return;
      state.flight_update_at_retunr = flight_update_at_return;
      state.flight_status_retunr = flight_status_return;


      // console.log('state', action.payload.locationFrom)
    },
    getDataFromUserContactReducer: (state, action: any) => {
      // console.log('state', state.locationFrom)
      const {
        firstNameContact,
        lastNameContact,
        phoneNumberContact,
        emailContact,
      } = action.payload;
      // console.log('data', action.payload)

      state.firstNameContact = firstNameContact;
      state.lastNameContact = lastNameContact;
      state.phoneNumberContact = phoneNumberContact;
      state.emailContact = emailContact;

      // console.log('state', action.payload.locationFrom)
    },
    getDataFromInfoPersonReducer: (state, action: any) => {
      // console.log('state', state.locationFrom)
      const arr = []
      const {
        firstNameContact,
        lastNameContact,
        phoneNumberContact,
        emailContact,
        nameUser,
        firstNameUser,
        lastNameUser,
        dobUser,
        nationalyUser,
        arrInfoUser
      } = action.payload;
      // console.log('data', action.payload
      // arr.push(arrInfoUser)
      // console.log('adasdadasdasda', arrInfoUser)
      state.firstNameContact = firstNameContact;
      state.lastNameContact = lastNameContact;
      state.phoneNumberContact = phoneNumberContact;
      state.emailContact = emailContact;

      state.nameUser = nameUser;
      state.firstNameUser = firstNameUser;
      state.lastNameUser = lastNameUser;
      state.dobUser = dobUser;
      state.nationalyUser = nationalyUser;

      state.arrInfoUser = arrInfoUser;

      // console.log("arr", state.arrInfoUser);
    },
    thanhToanReducer: (state, action) => {
      console.log('final', action.payload.urlPayment)
      // insertUserTable(representative_email: "${state.arrInfoUser.map((value:any)=> value.representative_email)[0]}", user_type: "${state.arrInfoUser.map((value:any)=> value.user_type)[0]}", user_name:" ${state.arrInfoUser.map((value:any)=> value.user_name)[0]}", first_name: "${state.arrInfoUser.map((value:any)=> value.first_name)[0]}", last_name: "${state.arrInfoUser.map((value:any)=> value.last_name)[0]}", dob: "${state.arrInfoUser.map((value:any)=> value.dob)[0]}", nationaly: "${state.arrInfoUser.map((value:any)=> value.nationaly)[0]}")

      // console.log("reducer", state.arrInfoUser.map((value:any)=> value.representative_email));
      // console.log("reducer", state.arrInfoUser.map((value:any)=> value.representative_email));
      // console.log("reducer", state.arrInfoUser[0].representative_email);
      // console.log("reducer", state.arrInfoUser.map((value:any)=> value.representative_email)[1]);
      const vl1 = state.arrInfoUser.map((value: any) => value.representative_email)[0]
      const vl2 = state.arrInfoUser.map((value: any) => value.user_type)[0]
      const vl3 = state.arrInfoUser.map((value: any) => value.user_name)[0]
      const vl4 = state.arrInfoUser.map((value: any) => value.first_name)[0]
      const vl5 = state.arrInfoUser.map((value: any) => value.last_name)[0]
      const vl6 = state.arrInfoUser.map((value: any) => value.dob)[0]
      const vl7 = state.arrInfoUser.map((value: any) => value.nationaly)[0]
      // console.log("reducer", state.arrInfoUser[0]);
      // console.log("reducer", state.arrInfoUser[0].i);
      // console.log("reducer", state.arrInfoUser[0].R);
      // const proxyEcEc = state.arrInfoUser
      // const dataProxy = Array.from(proxyEcEc)
      // console.log(dataProxy[0])


      // const test1 = state.arrInfoUser

      // const arrUser: any = c

      // console.log("ccj1z",arrUser)
      // console.log("ccj2z",arrUser[0].first_name)



      const handlePostApiUser = async () => {
        return state.arrInfoUser.map((value: any, index: any) => {
          // console.log(value.last_name)
          // console.log(arrUser[0])
          client.mutate({
            refetchQueries: "all",
            mutation: gql`
            mutation{
              insertUserTable(representative_email: "${value.representative_email}", user_type: "${value.user_type}", user_name:" ${value.user_name}", first_name: "${value.first_name}", last_name: "${value.last_name}", dob: "${value.dob}", nationaly: "${value.nationaly}")
            }
            `
          }).then(res => {
            console.log(res.data)
          })
        })

        // return arrUser.map(async (value: any, index: any) => {

        //   await axios.post("http://localhost:3001/data/users", {


        //     representative_email: value.representative_email,
        //     user_type: value.user_type,
        //     user_name: value.user_name,
        //     first_name: value.first_name,
        //     last_name: value.last_name,
        //     dob: value.dob,
        //     nationaly: value.nationaly,


        //   }).then(value => console.log('success!', index)).catch(err => console.log('err', err))

        // })

      }



      // client.mutate({
      //   mutation: gql`
      //   mutation{
      //     insertUserTable(representative_email: "${value.representative_email}", user_type: "${value.user_type}", user_name:" ${value.user_name}", first_name: "${value.first_name}", last_name: "${value.last_name}", dob: "${value.dob}", nationaly: "${value.nationaly}")
      //   }
      //   `
      // }).then(res => {
      //   console.log(res.data)
      // })



      const postApis = [
        {
          mutation: `
        mutation{
          insertBookingInfoTable(id:"${action.payload.uuidBooking_info}", representative_name:"${state.firstNameContact + state.lastNameContact}", representative_phone:"${state.phoneNumberContact}", representative_email:"${state.emailContact}", passenger_count:"1", booking_date:"${moment().format("DD/MM/YYYY")}", seat_class:"${state.seatCls}", update_at:"", booking_status:"active")
        }
        `,

          url: 'http://localhost:3001/data/booking-info',
          data: {
            id: action.payload.uuidBooking_info,
            representative_name: state.firstNameContact + state.lastNameContact,
            representative_phone: state.phoneNumberContact,
            representative_email: state.emailContact,
            passenger_count: '1',
            booking_date: moment().format('DD/MM/YYYY'),
            seat_class: state.seatCls,
            update_at: '',
            booking_status: 'active'
          }
        },
        {
          mutation: `
            mutation{
              insertBookingTransactionTable(id:"${action.payload.uuidBooking_info}", cashier_name:"${action.payload.cashier_name}", discount_code:"1", discount_reason:"1", total_price:"2.000.000VND", create_at:"${moment().format("DD/MM/YYYY")}", update_at:"")
            }
          `,
          url: 'http://localhost:3001/data/booking-transaction',
          data: {
            id: action.payload.uuidBooking_info,
            cashier_name: action.payload.cashier_name,
            discount_code: "1",
            discount_reason: "1",
            total_price: "2.000.000VND",
            create_at: moment().format("DD/MM/YYYY"),
            update_at: "",
          }
        },
        {

          mutation: `
            mutation{
              insertPaymentMethodsTable(id:"${action.payload.uuidBooking_info}", status_payment:"active")
            }
          `,
          url: 'http://localhost:3001/data/payment-methods',
          data: {
            id: action.payload.uuidBooking_info,
            status_payment: "active",
          }
        },
        {
          mutation: `
            mutation{
              insertApiKeysTable(id:"${action.payload.uuidBooking_info}", payment_name:"vnpay", create_at:"${moment().format("DD/MM/YYYY")}", update_at:"")
            }
          `,
          url: 'http://localhost:3001/data/api-key',
          data: {
            id: action.payload.uuidBooking_info,
            payment_name: "vnpay",
            create_at: moment().format("DD/MM/YYYY"),
            update_at: "",
          }
        },
        {


          url: 'http://localhost:3001/data/flights',
          data: {
            id: action.payload.uuidBooking_info,
            fligth_type: state.returnDate == '0' ? 'Một chiều' : 'Khứ hồi',
            depature_airport: state.depature_airport + `${state.returnDate == '0' ? '' : `${' - ' + state.depature_airport_retunr}`}`,
            arrival_airport: state.arrival_airport + `${state.returnDate == '0' ? '' : `${' - ' + state.arrival_airport_retunr}`}`,
            depature_time: state.depature_time + `${state.returnDate == '0' ? '' : `${' - ' + state.depature_time_retunr}`}`,
            arrival_time: state.arrival_time + `${state.returnDate == '0' ? '' : `${' - ' + state.arrival_time_retunr}`}`,
            create_at: moment().format('DD/MM/YYYY'),
            update_at: '',
            flight_status: state.flight_status,
          }
        },

      ];

      // const arrInfor = state.arrInfoUser

      const redirect = () => {
        window.location.href = `${action.payload.urlPayment}`
      }

      async function postApiRecursive() {
        // if (index === postApis.length) {
        //   // Nếu đã gọi hết tất cả các API thì thoát đệ quy
        //   return;
        // }



        // // await axios.post(postApis[index].url, postApis[index].data);
        // await client.mutate({
        //   refetchQueries:"active",
        //   mutation: gql`${postApis[index].mutation}`,



        // })
        // .then(res => {
        //   console.log(res.data)
        //   // postApiRecursive(index + 1);
        // })
        // console.log('progress', postApis[index].mutation)
        // console.log(`API ${index + 1}`);


        // client.mutate({
        //   mutation: gql`
        //   mutation{
        //     insertUserTable(representative_email: "${value.representative_email}", user_type: "${value.user_type}", user_name:" ${value.user_name}", first_name: "${value.first_name}", last_name: "${value.last_name}", dob: "${value.dob}", nationaly: "${value.nationaly}")
        //   }
        //   `
        // }).then(res => {
        //   console.log(res.data)
        // })



        // Gọi đệ quy để gọi API tiếp theo
        // await postApiRecursive(index + 1);
        //   const mutation1 = await gql`
        // mutation{
        //   insertBookingInfoTable(id:"${action.payload.uuidBooking_info}", representative_name:"${state.firstNameContact + state.lastNameContact}", representative_phone:"${state.phoneNumberContact}", representative_email:"${state.emailContact}", passenger_count:"1", booking_date:"${moment().format("DD/MM/YYYY")}", seat_class:"${state.seatCls}", update_at:"", booking_status:"active")
        // }
        // `
        //   const mutation2 = await gql`
        // mutation{
        //   insertBookingTransactionTable(id:"${action.payload.uuidBooking_info}", cashier_name:"${action.payload.cashier_name}", discount_code:"1", discount_reason:"1", total_price:"2.000.000VND", create_at:"${moment().format("DD/MM/YYYY")}", update_at:"")
        // }
        // `
        //   const mutation3 = await gql`
        // mutation{
        //   insertPaymentMethodsTable(id:"${action.payload.uuidBooking_info}", status_payment:"active")
        // }
        // `
        //   const mutation4 = await gql`
        // mutation{
        //   insertApiKeysTable(id:"${action.payload.uuidBooking_info}", payment_name:"vnpay", create_at:"${moment().format("DD/MM/YYYY")}", update_at:"")
        // }
        // `
        //   const mutation5 = await gql`
        // mutation{
        //   insertFligthsTable(id:"${action.payload.uuidBooking_info}", fligth_type:${state.returnDate == "0" ? "Một chiều" : "Khứ hồi"}, depature_airport:"${state.depature_airport + state.returnDate == "0" ? "" : " - " + state.depature_airport_retunr}", arrival_airport:"${state.arrival_airport + state.returnDate == "0" ? "" : " - " + state.arrival_airport_retunr}", depature_time:"${state.depature_time + state.returnDate == "0" ? "" : " - " + state.depature_time_retunr}", arrival_time:"${state.arrival_time + state.returnDate == "0" ? "" : " - " + state.arrival_time_retunr}", create_at:"${moment().format("DD/MM/YYYY")}", update_at:"", flight_status:"${state.flight_status}")
        // }
        // `

        // new
        // await console.log('ok')



        // await client.mutate({
        //   refetchQueries: "all", mutation: gql`
        //   mutation{
        //     insertBookingInfoTable(id:"${action.payload.uuidBooking_info}", representative_name:"${state.firstNameContact + state.lastNameContact}", representative_phone:"${state.phoneNumberContact}", representative_email:"${state.emailContact}", passenger_count:"1", booking_date:"${moment().format("DD/MM/YYYY")}", seat_class:"${state.seatCls}", update_at:"", booking_status:"active")
        //   }
        //   ` })
        // console.log('1')
        // await client.mutate({
        //   refetchQueries: "all", mutation: gql`
        //   mutation{
        //     flightsTable(id:"${action.payload.uuidBooking_info}", fligth_type: "khu hoi", depature_airport: "1", arrival_airport: "2", depature_time:"3", arrival_time: "23", create_at: "213", update_at: "!23", flight_status: "active")
        //   }
        //   ` })
        // console.log('2')

        // await client.mutate({
        //   refetchQueries: "all", mutation: gql`
        //   mutation{
        //     insertBookingTransactionTable(id:"${action.payload.uuidBooking_info}", cashier_name:"${action.payload.cashier_name}", discount_code:"1", discount_reason:"1", total_price:"2.000.000VND", create_at:"${moment().format("DD/MM/YYYY")}", update_at:"")
        //   }
        //   ` })

        // console.log('3')


        // await action.payload.arrUser.map(async (value: any, index: any) => {
        //   //   // console.log(value.last_name)
        //   //   // console.log(arrUser[0])
        //   await client.mutate({
        //     refetchQueries: "active",
        //     mutation: gql`
        //       mutation{
        //         insertUserTable(representative_email: "${value.representative_email}", user_type: "${value.user_type}", user_name:" ${value.user_name}", first_name: "${value.first_name}", last_name: "${value.last_name}", dob: "${value.dob}", nationaly: "${value.nationaly}")
        //       }
        //       `
        //   })
        // })

        // console.log('6',)



        // await client.mutate({
        //   refetchQueries: "all", mutation: gql`
        //   mutation{
        //     insertPaymentMethodsTable(id:"${action.payload.uuidBooking_info}", status_payment:"active")
        //   }
        //   ` })

        // console.log('4')
        // await client.mutate({
        //   refetchQueries: "all", mutation: gql`
        //   mutation{
        //     insertApiKeysTable(id:"${action.payload.uuidBooking_info}", payment_name:"vnpay", create_at:"${moment().format("DD/MM/YYYY")}", update_at:"")
        //   }
        //   ` })
        // // .then(async (res) => {
        // //   await console.log('4')
        // //  .then(res => {
        // console.log('5')

        // await redirect()


        //     })
        //   //  await axios.post(postApis[4].url, postApis[4].data).then(res=>console.log('done'));
        // })

      }


      const emailSending = () => {
        const templateParams = {
          // to_email:'tsizip1@gmail.com',
          from_name: "Trí mới gửi",
          // from_email:'tsizip@gmail.com',
          to_name: "tsizip1",
          message: `Id đặt vé của bạn: ${action.payload.uuidBooking_info}`,
        };
        emailjs.send("service_porfvjn", "template_cat0kzf", templateParams, 'btWvMI6ZOo57Nhr9E')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          }, (err) => {
            console.log('FAILED...', err);
          });
      }


      const submit = async () => {
        // await handlePostApiUser()
        await postApiRecursive();

        await emailSending()
        // api 
        // await api1()
        // await api2()
        // await api3()
        // await api4()
        // await api5()
        // console.log('arr', state.arrInfoUser.first_name)


      }

      submit();


    },
  },
});

export const {
  getDataReducer,
  dataFromFlightReducer,
  dataFromFlightReturnReducer,
  getDataFromUserContactReducer,
  getDataFromInfoPersonReducer,
  thanhToanReducer,
} = dataHomeReducer.actions;

export default dataHomeReducer.reducer;

// ==================== action thunk +++++++++++++++++++

export const dataFromHome = (data: any) => {
  return (dispatch: any) => {
    // console.log('data from home page', data)
    dispatch(getDataReducer(data));
  };
};

export const dataFromFlight = (data: any) => {
  return (dispatch: any) => {
    // console.log('data flight', data)
    // console.log('arr user',  )
    dispatch(dataFromFlightReducer(data));
  };
};

export const dataFromFlightReturn = (data: any) => {
  return (dispatch: any) => {
    dispatch(dataFromFlightReturnReducer(data));
  };
};

export const dataFromUserContactReducer = (data: any) => {
  return (dispatch: any) => {
    dispatch(getDataFromUserContactReducer(data));
  };
};

export const dataFromInfoPerson = (data: any) => {
  return (dispatch: any) => {
    dispatch(getDataFromInfoPersonReducer(data));
  };
};

export const thanhToan = (data1: any) => {
  // console.log('dataaa', data.useQueryCustom)

  console.log('data1', data1.urlPayment)
  // client.query({
  //   query: gql`
  //   query{
  //     users {
  //       representative_email
  //       first_name
  //     }
  //   }
  //   `
  // }).then(res=>{
  //   console.log(res.data)
  // })


  return (dispatch: any) => {
    const uuidApi_key = uuidv4();
    const uuidPayment_methods = uuidv4();
    const uuidBooking_transaction = uuidv4();
    const uuidFlight_id = uuidv4();
    // const uuidRepresentative_email = uuidv4();
    const uuidBooking_info = uuidv4();
    // const cashier_name = data.cashier_name;
    const cashier_name = 'Thanh Thanh';

    // console.log('data stte', getState)
    dispatch(
      thanhToanReducer({
        uuidApi_key,
        uuidPayment_methods,
        cashier_name,
        uuidBooking_transaction,
        uuidFlight_id,
        // uuidRepresentative_email,
        uuidBooking_info,
        arrUser: data1.arrUser,
        urlPayment: data1.urlPayment



      })
    );
  };
};
