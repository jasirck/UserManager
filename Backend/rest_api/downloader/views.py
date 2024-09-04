from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
import youtube_dl

class download_video(APIView):
    # Only authenticated users can access this view
    # permission_classes = [IsAuthenticated]

    # Handle GET requests
    def get(self, request):
        url = request.query_params.get('url')  # Get the URL from query params
        if not url:
            return Response({"error": "URL parameter is missing"}, status=status.HTTP_400_BAD_REQUEST)

        print("Received URL:", url)
        
        try:
            # Use youtube_dl to fetch available resolutions
            ydl_opts = {'format': 'best'}  # Options for youtube_dl

            with youtube_dl.YoutubeDL(ydl_opts) as ydl:
                info_dict = ydl.extract_info(url, download=False)
                formats = info_dict.get('formats', [])
                resolutions = [f['format_note'] for f in formats if 'format_note' in f]
                print("Available resolutions:", resolutions)

            data = {"message": "Available resolutions", "resolutions": resolutions}
            return Response(data, status=status.HTTP_200_OK)

        except Exception as e:
            print(f"An error occurred: {str(e)}")
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # Handle POST requests
    def post(self, request):
        # Your logic for POST request
        received_data = request.data['text']  
        print(received_data)
        # Example: Just echo back the received data
        return Response({"received": received_data}, status=status.HTTP_201_CREATED)
