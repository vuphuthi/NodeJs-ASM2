import React from 'react'
import { useForm } from 'react-hook-form'


type Props = {}

const ProductAdd = ({ onAdd }: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHandleSubmit = (data: any) => {
        console.log(data);
        onAdd(data)
        alert("thêm sản phẩm thành công");
    }
    return (
        <div>
            {/* <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>this field is required</span>}
                <input type="number" {...register("price")} />
                <button>submit</button>
            </form> */}
<section className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg border:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg border:grid-cols-5">
        <div className="lg border:col-span-2 lg border:py-12">
          
        </div>
  
        <div className="rounded-lg bg-white p-8 shadow-lg border lg border:col-span-3 lg border:p-12">
          <form action="" className="space-y-4" onSubmit={handleSubmit(onHandleSubmit)}>
            <div>
              <label>Name</label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                {...register("name")}
              />
              <p className='text-red-600 text-[10px]'>
                {/* {errors.name && errors.name.message} */}
              </p>
            </div>
  
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label>Giá</label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  {...register("price")}
                  type="number"
                />
                <p className='text-red-600 text-[10px]'>
                {/* {errors.price && errors.price.message} */}
              </p>
              </div>
            </div>
  
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label>Giảm giá</label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  {...register("original_price")}
                  type="number"
                />
                <p className='text-red-600 text-[10px]'>
                {/* {errors.original_price && errors.original_price.message} */}
              </p>
              </div>
            </div>
  
            <div>
              <label>Mô tả</label>
  
              <textarea
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                {...register("description")}
              ></textarea>
              <p className='text-red-600 text-[10px]'>
                {/* {errors.description && errors.description.message} */}
              </p>
            </div>
  
            <div>
              <label>Link ảnh</label>
  
              <textarea
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                {...register("image")}
              ></textarea>
              <p className='text-red-600 text-[10px]'>
                {/* {errors.image && errors.image.message} */}
              </p>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Thêm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default ProductAdd