@extends('admin_layout.master')
@section('content')

<div class="nk-content">
    <div class="container-fluid">
        <div class="nk-content-inner">
            <div class="nk-content-body">
                <div class="components-preview wide-md mx-auto">
                    <div class="nk-block nk-block-lg">
                        <div class="nk-block-head">
                            <div class="nk-block-head-content">
                                <h4 class="nk-block-title">Reviews</h4>
                            </div>
                        </div>
                        <div class="card card-bordered card-preview">
                            <div class="card-inner">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Author</th>
                                            <th scope="col">Rating</th>
                                            <th scope="col">Review</th>
                                            <th scope="col">Review Item</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @if(isset($reviews) && $reviews->isNotEmpty())
                                        @foreach($reviews as $data)
                                        <tr>
                                            <td>{{ $data->first_name ?? '' }} {{ $data->last_name ?? '' }}</td>
                                            <td>
                                            @if(isset($data->rating) && $data->rating != null)
                                                <div id="full-stars-example-two">
                                                    <div class="ratings">
                                                        @for($i = 1; $i <= 5; $i++)
                                                            <label for="rating{{ $i }}">
                                                                <i rate="{{ $i }}" class="star fa fa-star {{ $data->rating >= $i ? 'rating-color' : '' }}"></i>
                                                            </label>
                                                            <input name="rating" id="rating{{ $i }}" class="chkbox" style="display:none;" value="{{ $i }}" {{ $data->rating == $i ? 'checked' : '' }}>
                                                        @endfor
                                                    </div>
                                                </div>
                                            @endif
                                            </td>
                                            <td>{{ $data->description ?? '' }}</td>
                                            <td>{{ $data->document->title ?? '' }}</td>
                                        </tr>
                                        @endforeach
                                    @endif
                                    </tbody>
                                </table>
                            </div>
                        </div><!-- .card-preview -->
                    </div><!-- .nk-block -->
                </div><!-- .components-preview -->
            </div>
        </div>
    </div>
</div>

@endsection