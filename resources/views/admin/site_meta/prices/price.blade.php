@extends('admin_layout.master')
@section('content')

<div class="nk-content">
     <div class="container-fluid">
          <form action="{{ url('/admin-dashboard/add-price') }}" method="post" enctype="multipart/form-data">
               @csrf
               <input type="hidden" name="delete_content_ids" id="delete_content_ids" value="">
               <div class="card card-bordered card-preview">
                    <div class="card-inner">
                         <div class="d-flex justify-content-end p-2">
                              <div class="nk-block-head-content">
                                   <div class="mbsc-form-group">
                                        <a href="{{ url('/prices') }}" class="btn btn-default">View Page</a>
                                   </div>
                              </div>
                         </div>
                         <div class="col-md-12 pb-2">
                              <div class="form-group">
                                   <label class="form-label" for="title"><b><h4>Page Title</b></h4></label>
                                   <input type="text" class="form-control form-control-lg" id="title" name="title" value="{{ $data['title'] ?? '' }}">
                              </div>
                         </div>
                         <hr>
                         <h5>Banner Section</h5>
                         <hr>
                         <div class="col-md-12">
                              <div class="form-group">
                                   <label class="form-label" for="background_image">Background Image</label>
                                   <input type="file" class="form-control" id="background_image" name="background_image">
                              </div>
                              <div class="form-group">
                                   <img src="{{ asset('storage/'.$data['background_image'] ?? '' ) }}" height="140px" width="160px">
                              </div>
                         </div>
                         <div class="col-md-12">
                              <div class="form-group">
                                   <label class="form-label" for="banner_title">Banner Title</label>
                                   <input type="text" class="form-control" id="banner_title" name="banner_title" value="{{ $data['banner_title'] ?? '' }}">
                              </div>
                         </div>
                         <div class="col-md-12">
                              <div class="form-group">
                                   <label class="form-label" for="banner_description">Banner Description</label>
                                   <textarea class="form-control" id="banner_description" name="banner_description">{{ $data['banner_description'] ?? '' }}</textarea>
                              </div>
                         </div>
                         <div class="col-md-12">
                              <div class="form-group">
                                   <label class="form-label" for="banner_image">Banner Image</label>
                                   <input type="file" class="form-control" id="banner_image" name="banner_image">
                              </div>
                              <div class="form-group">
                                   <img src="{{ asset('storage/'.$data['banner_image'] ?? '' ) }}" height="200px" width="300px">
                              </div>
                         </div>
                         <hr>
                         <h5>Document Description Price</h5>  
                         <hr> 
                         <div class="col-md-12">
                              <div class="form-group">
                                   <label class="form-label" for="document_heading">Document heading</label>
                                   <input type="text" class="form-control" id="document_heading" name="document_heading" value="{{ $data['document_heading'] ?? '' }}">
                              </div>
                         </div>
                         <div class="col-md-12">
                              <div class="form-group">
                                   <label class="form-label" for="description_heading">Description heading</label>
                                   <input type="text" class="form-control" id="description_heading" name="description_heading" value="{{ $data['description_heading'] ?? '' }}">
                              </div>
                         </div>
                         <div class="col-md-12">
                              <div class="form-group">
                                   <label class="form-label" for="price_heading">Price heading</label>
                                   <input type="text" class="form-control" id="price_heading" name="price_heading" value="{{ $data['price_heading'] ?? '' }}">
                              </div>
                         </div>
                         <br>
                         <h6>Price Section</h6>
                         <hr>
                         @if(isset($document_price_description) && $document_price_description != null)
                         @foreach($document_price_description as $content)
                         <div class="price-append-sec{{ $content->id ?? '' }}">
                              <hr>
                              <div class="row gy-12">
                                   <div class="text-end"><span class="remove-price-sec" data-id="{{ $content->id ?? '' }}"><i class="fa fa-times"></i></span></div>
                                   <div class="col-md-3">
                                        <div class="form-group">
                                             <label class="form-label" for="document">Document</label>
                                             <div class="form-control-wrap"> 
                                                  <select class="form-select js-select2" name="document[{{ $content->id ?? '' }}]" id="document">
                                                       <option value="" selected disabled>Select</option>
                                                       @if(isset($document) && $document != null)
                                                            @foreach($document as $doc)
                                                                 @if($doc->id == $content->document)
                                                                 <option value="{{ $doc->id ?? '' }}" selected>{{ $doc->title ?? '' }}</option>
                                                                 @else
                                                                 <option value="{{ $doc->id ?? '' }}">{{ $doc->title ?? '' }}</option>
                                                                 @endif
                                                            @endforeach
                                                       @endif
                                                  </select>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="col-md-3">
                                        <div class="form-group">
                                             <label class="form-label" for="button_text">Button text</label>
                                             <input type="text" class="form-control" id="button_text" name="button_text[{{ $content->id ?? '' }}]" value="{{ $content->button_text ?? '' }}">
                                        </div>
                                   </div>
                                   <div class="col-md-2">
                                        <div class="form-group">
                                             <label class="form-label" for="price">Price</label>
                                             <input type="text" class="form-control" id="price" name="price[{{ $content->id ?? '' }}]" value="{{ $content->price ?? '' }}">
                                        </div>
                                   </div>
                                   <div class="col-md-4">
                                        <div class="form-group">
                                             <label class="form-label" for="description">Description</label>
                                             <textarea class="form-control" id="description" name="description[{{ $content->id ?? '' }}]">{{ $content->description ?? '' }}</textarea>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         @endforeach
                         @endif
                         <div id="price-section">
                         </div>
                         <br>
                         <div class="text-end">
                              <div class="form-group">
                                   <button type="button" class="btn btn-sm btn-primary" id="add-price-sec">Add Row</button>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="mt-3">
                    <button class="btn btn-primary" type="submit">Save</button>
               </div>
          </form>
     </div>
</div>

<script>
     $(document).ready(function(){
          var documentData = {!! json_encode($document) !!};
          $('#add-price-sec').click(function(){
               var documentOptions = [];
               $.each(documentData, function(key, val){
                    var documentHtml = `<option value="${val.id}">${val.title}</option>`;
                    documentOptions.push(documentHtml);
               });
               var documentOptionsHtml = documentOptions.join('');

               var html = `<div class="price-append-sec">
                              <hr>
                              <div class="row gy-12">
                                   <div class="text-end"><span class="remove-price-sec" value="appended"><i class="fa fa-times"></i></span></div>
                                   <div class="col-md-3">
                                        <div class="form-group">
                                             <label class="form-label" for="new_document">Document</label>
                                             <div class="form-control-wrap"> 
                                                  <select class="form-select js-select2" name="new_document[]" id="new_document">
                                                       <option value="" selected disabled>Select</option>
                                                       ${documentOptionsHtml}
                                                  </select>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="col-md-3">
                                        <div class="form-group">
                                             <label class="form-label" for="new_button_text">Button text</label>
                                             <input type="text" class="form-control" id="new_button_text" name="new_button_text[]" value="">
                                        </div>
                                   </div>
                                   <div class="col-md-2">
                                        <div class="form-group">
                                             <label class="form-label" for="new_price">Price</label>
                                             <input type="text" class="form-control" id="new_price" name="new_price[]" value="">
                                        </div>
                                   </div>
                                   <div class="col-md-4">
                                        <div class="form-group">
                                             <label class="form-label" for="new_description">Description</label>
                                             <textarea class="form-control" id="new_description" name="new_description[]"></textarea>
                                        </div>
                                   </div>
                              </div>
                         </div><br>`;

               $('#price-section').append(html);
          });


          $('body').delegate('.remove-price-sec', 'click', function () {
               var id = $(this).data('id');
               if($(this).attr('value') === 'appended'){
                    $(this).closest('.price-append-sec').remove();
                    return false;
               }

               let deleteIds = $('#delete_content_ids').val();
               if(deleteIds) {
                    deleteIds += ',' + id;
               }else {
                    deleteIds = id;
               }
               $('#delete_content_ids').val(deleteIds);

               $('.price-append-sec'+id).hide();
          });


     });
</script>


@endsection